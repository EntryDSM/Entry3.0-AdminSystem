from flask import Blueprint, request, abort, Response
from flask_restful import Api
from flasgger import swag_from

from app.views import BaseResource, check_auth

from app.models import db
from app.models.user_models import UserModel, ApplyStatusModel, InfoModel
from app.models.graduate_models import GraduateInfoModel, GraduateScoreModel, GraduateGradeModel
from app.models.ged_models import GedScoreModel

from app.docs.details import *

api = Api(Blueprint(__name__, __name__))

api.prefix = '/applicants/details'


@api.resource('/information/<user_id>')
class ViewApplicantDetails(BaseResource):
    @swag_from(VIEW_APPLICANT_DETAILS_GET)
    @check_auth()
    def get(self, user_id):
        applicant = db.session.query(UserModel, InfoModel, ApplyStatusModel, GraduateInfoModel)\
            .join(InfoModel).join(ApplyStatusModel).join(GraduateInfoModel)\
            .filter(UserModel.user_id == user_id)\
            .filter(ApplyStatusModel.final_submit is True).first()

        if not applicant:
            abort(400)

        academic = {
            'school_name': applicant.GraduateInfoModel.school_name,
            'student_class': applicant.GraduateInfoModel.student_class,
            'student_grade': applicant.GraduateInfoModel.student_grade,
            'student_number': applicant.GraduateInfoModel.student_number,
            'graduate_year': applicant.GraduateInfoModel.graduate_year,
            'is_ged': False
        } if str(applicant.UserModel.graduate_type.name) != 'GED' else {'is_ged': True}

        return self.unicode_safe_json_dumps({
            'main': {
                'name': applicant.InfoModel.name,
                'admission': str(applicant.UserModel.admission.name),
                'region': '대전' if applicant.UserModel.region is True else '전국'
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
            'academic': academic,
            'exam_code': applicant.ApplyStatusModel.exam_code
        }, 200)


@api.resource('/grade/<user_id>')
class ViewApplicantGrade(BaseResource):
    @swag_from(VIEW_APPLICANT_GRADE_GET)
    @check_auth()
    def get(self, user_id):
        applicant = UserModel.query.filter_by(user_id=user_id).first()

        if not applicant or not ApplyStatusModel.query.filter_by(user_id=user_id).first().final_submit:
            abort(400)

        if str(applicant.graduate_type.name) == 'GED':
            ged_score = GedScoreModel.query.filter_by(user_id=user_id).first()
            res = {
                'ged_grade': ged_score.grade,
                'final_score': ged_score.final_score
            }
        else:
            graduate_score = GraduateScoreModel.query.filter_by(user_id=user_id).first()
            graduate_grade = GraduateGradeModel.query.filter_by(user_id=user_id).all()

            res = {
                'school_grade': {
                    'first_grade': graduate_score.first_grade,
                    'second_grade': graduate_score.second_grade,
                    'third_grade': graduate_score.third_grade,
                    'conversion_score': graduate_score.conversion_score
                },
                'score': {
                    'attendance_score': graduate_score.attendance_score,
                    'volunteer_score': graduate_score.volunteer_score,
                    'final_score': graduate_score.final_score
                },
                'volunteer_time': graduate_score.volunteer_time,
                'subject_grade': [{
                    'semester': grade.semester,
                    'korean': grade.korean,
                    'social': grade.social,
                    'history': grade.history,
                    'math': grade.math,
                    'science': grade.science,
                    'tech': grade.tech,
                    'english': grade.english
                } for grade in graduate_grade]
            }

        return self.unicode_safe_json_dumps(res, 200)


@api.resource('/receipt/<user_id>')
class ConvertReceiptValue(BaseResource):
    @swag_from(CONVERT_RECEIPT_VALUE_PATCH)
    @check_auth()
    def patch(self, user_id):
        applicant_status = ApplyStatusModel.query.filter_by(user_id=user_id).first()

        if not applicant_status:
            abort(400)

        applicant_status.receipt = True if not applicant_status.receipt else False
        db.session.commit()

        return Response('', 201)


@api.resource('/payment/<user_id>')
class ConvertPaymentValue(BaseResource):
    @swag_from(CONVERT_PAYMENT_VALUE_PATCH)
    @check_auth()
    def patch(self, user_id):
        applicant_status = ApplyStatusModel.query.filter_by(user_id=user_id).first()

        if not applicant_status:
            abort(400)

        applicant_status.payment = True if not applicant_status.payment else False
        db.session.commit()

        return Response('', 201)


@api.resource('/exam_code/<user_id>')
class IssueExamCode(BaseResource):
    @swag_from(ISSUE_EXAM_CODE_PATCH)
    @check_auth()
    def patch(self, user_id):
        applicant = db.session.query(UserModel, InfoModel, ApplyStatusModel)\
            .join(InfoModel).join(ApplyStatusModel)\
            .filter(UserModel.user_id == user_id)\
            .filter(ApplyStatusModel.final_submit is True).first()

        if not applicant:
            abort(400)

        # 수험번호 첫자리 - 전형
        exam_code = str(applicant.UserModel.admission.value)

        # 수험번호 둘째자리 - 주소
        if len(applicant.InfoModel.address_base) == 4:
            address = applicant.InfoModel.address_base[:3]
        else:
            address = applicant.InfoModel.address_base[:2]

        if address == '대전':
            exam_code += '1'
        elif address == '제주':
            exam_code += '2'
        elif address == '강원':
            exam_code += '3'
        elif address in ('부산', '울산', '경상남'):
            exam_code += '4'
        elif address in ('광주', '전라남'):
            exam_code += '5'
        elif address in ('대구', '경상북'):
            exam_code += '6'
        elif address == '전라북':
            exam_code += '7'
        elif address in ('서울', '경기', '인천'):
            exam_code += '8'
        elif address in ('세종', '충청'):
            exam_code += '9'

        # 수험번호 셋쩨&마지막세자리 - 전형세부&접수번호
        exam_code = str(applicant.UserModel.admission_detail.value) + str(applicant.ApplyStatusModel.receipt_code)

        target = ApplyStatusModel.query.filter_by(user_id=user_id).first()

        target.exam_code = exam_code
        db.session.commit()

        return Response('', 201)


# @api.resource('/<user_id>/excel')
# class PrintExcelOne(BaseResource):
#     def post(self, user_id):
#         pass
