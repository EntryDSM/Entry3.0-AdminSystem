from flask import Blueprint, request, abort, Response
from flask_restful import Api
from flasgger import swag_from

from app.views import BaseResource, check_auth

from app.models import db
from app.models.userData import UserModel, ApplyStatusModel
from app.models.infoData import InfoModel
from app.models.gradeData import *


from app.docs.details import *

api = Api(Blueprint(__name__, __name__))

api.prefix = '/applicants'


@api.resource('/details/<user_id>')
class ViewApplicantsDetails(BaseResource):
    @swag_from(VIEW_APPLICANTS_DETAILS_GET)
    @check_auth()
    def get(self, user_id):
        applicant = db.session.query(UserModel, InfoModel, ApplyStatusModel, GraduateInfoModel)\
            .join(InfoModel).join(ApplyStatusModel).join(GraduateInfoModel)\
            .filter(UserModel.user_id == user_id)\
            .filter(ApplyStatusModel.final_submit is True).first()

        if not applicant:
            abort(400)

        graduate_info = {
            'school_name': applicant.GraduateInfoModel.school_name,
            'student_number': applicant.GraduateInfoModel.student_number,
            'graduated_year': applicant.GraduateInfoModel.graduate_year,
            'is_ged': False,
            'exam_code': applicant.InfoModel.exam_code
        }

        if str(applicant.UserModel.graduate_type).split('.')[1].lower() == 'ged':
            graduate_info['is_ged'] = True
            graduate_info['school_name'] = None
            graduate_info['student_number'] = None
            graduate_info['graduated_year'] = None

        return self.unicode_safe_json_dumps({
            'main': {
                'name': applicant.InfoModel.name,
                'admission': str(applicant.InfoModel.admission).split('.')[1].lower(),
                'region': '대전' if applicant.InfoModel.region is True else '전국'
            },
            'basic': {
                'name': applicant.InfoModel.name,
                'tel': applicant.InfoModel.my_tel,
                'address': applicant.InfoModel.address_base + ' ' + applicant.InfoModel.address_detail
            },
            'parent': {
                'name': applicant.InfoModel.parent_name,
                'tel': applicant.InfoModel.parent_tel
            },
            'graduate_info': graduate_info
        }, 200)


@api.resource('/grade/<user_id>')
class ViewApplicantsGrade(BaseResource):
    @swag_from(VIEW_APPLICANTS_GRADE_GET)
    @check_auth()
    def get(self, user_id):
        if not UserModel.query.filter_by(user_id=user_id).first() \
                or not ApplyStatusModel.query.filter_by(user_id=user_id).first().final_submit:
            abort(400)

        def compute_subject_grade(semester):
            subject_grade = GradeInfoModel.query.filter_by(user_id=user_id)

            return [
                [str(g.score).split('.')[1] for g in subject_grade.filter_by(semester=semester)]
            ] if subject_grade else None

        if str(UserModel.query.filter_by(user_id=user_id).first().graduate_type).split('.')[1] == 'GED':
            grade = GedGradeModel.query.filter_by(user_id=user_id).first()
            res = {
                'final_score': float(grade.final_score),
                'grade': float(grade.grade)
            }
        else:
            grade = GraduateGradeModel.query.filter_by(user_id=user_id).first()

            res = {
                'grades': {
                    'first_grade': float(grade.first_grade),
                    'second_grade': float(grade.second_grade),
                    'third_grade': float(grade.third_grade),
                    'conversion_score': float(grade.conversion_score)
                },
                'scores': {
                    'attendance_score': float(grade.attendance_score),
                    'volunteer_score': float(grade.volunteer_score),
                    'final_score': float(grade.final_score)
                },
                'volunteer_time': float(grade.volunteer_time),
                'subject_grades': {
                    'first_first': compute_subject_grade(1),
                    'first_second': compute_subject_grade(2),
                    'second_first': compute_subject_grade(3),
                    'second_second': compute_subject_grade(4),
                    'third_first': compute_subject_grade(5)
                }
            }

        return res, 200


@api.resource('/receipt/<user_id>')
class ConvertToTrueReceipt(BaseResource):
    @swag_from(CONVERT_TO_TRUE_RECEIPT_PATCH)
    @check_auth()
    def patch(self, user_id):
        applicant_status = ApplyStatusModel.query.filter_by(user_id=user_id).first()

        if not applicant_status:
            abort(400)

        applicant_status.receipt = True
        db.session.commit()

        return Response('', 201)


@api.resource('/payment/<user_id>')
class ConvertToTruePayment(BaseResource):
    @swag_from(CONVERT_TO_TRUE_PAYMENT_PATCH)
    @check_auth()
    def patch(self, user_id):
        applicant_status = ApplyStatusModel.query.filter_by(user_id=user_id).first()

        if not applicant_status:
            abort(400)

        applicant_status.payment = True
        db.session.commit()

        return Response('', 201)


@api.resource('/exam_code/<user_id>')
class IssueExamCode(BaseResource):
    @swag_from(ISSUE_EXAM_CODE_PATCH)
    @check_auth()
    def patch(self, user_id):
        applicant_info = InfoModel.query.filter_by(user_id=user_id).first()

        if not applicant_info:
            abort(400)

        # 수험번호 첫자리 - 전형
        exam_code = str(applicant_info.admission.value)

        # 수험번호 둘째자리 - 주소
        if len(applicant_info.address_base) == 4:
            address = applicant_info.address_base[:3]
        else:
            address = applicant_info.address_base[:2]

        if address == '대전':
            exam_code = exam_code + '1'
        elif address == '제주':
            exam_code = exam_code + '2'
        elif address == '강원':
            exam_code = exam_code + '3'
        elif address in ('부산', '울산', '경상남'):
            exam_code = exam_code + '4'
        elif address in ('광주', '전라남'):
            exam_code = exam_code + '5'
        elif address in ('대구', '경상북'):
            exam_code = exam_code + '6'
        elif address == '전라북':
            exam_code = exam_code + '7'
        elif address in ('서울', '경기', '인천'):
            exam_code = exam_code + '8'
        elif address in ('세종', '충청'):
            exam_code = exam_code + '9'

        # 수험번호 셋쩨&마지막세자리 - 전형세부&접수번호
        exam_code = exam_code + str(applicant_info.admission_detail.value) + str(applicant_info.receipt_code)

        applicant_info.exam_code = exam_code
        db.session.commit()

        return Response('', 201)


@api.resource('/<user_id>/excel')
class PrintExcelOne(BaseResource):
    def post(self, user_id):
        pass
