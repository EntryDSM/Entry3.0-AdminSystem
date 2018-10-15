import csv
from io import StringIO

from flask import Blueprint, request, abort, Response, make_response
from flask_restful import Api
from flasgger import swag_from

from app.views import BaseResource, check_auth, create_csv_row, create_exam_table

from app.models import db
from app.models.admin_models import SchoolModel
from app.models.user_models import UserModel, ApplyStatusModel, InfoModel, DocumentModel
from app.models.graduate_models import GraduateInfoModel, GraduateScoreModel, GraduateGradeModel
from app.models.ged_models import GedScoreModel

from app.docs.details import *

api = Api(Blueprint(__name__, __name__))

api.prefix = '/api/applicants/details'


@api.resource('/information/<user_id>')
class ViewApplicantDetails(BaseResource):
    @swag_from(VIEW_APPLICANT_DETAILS_GET)
    @check_auth()
    def get(self, user_id):
        applicant = UserModel.query.filter_by(user_id=user_id).first()
        res = {}

        if not applicant:
            abort(400)

        # 최종 제출을 하지 않은 지원자
        if not ApplyStatusModel.query.filter_by(user_id=user_id).first().final_submit:
            e_info = InfoModel.query.filter_by(user_id=user_id).first()
            e_graduate_info = GraduateInfoModel.query.filter_by(user_id=user_id).first()

            res = {
                'name': '',
                'email': '',
                'tel': '',
                'parent_tel': '',
                'school': ''
            }

            if e_info:
                res['name'] = e_info.name
                res['email'] = applicant.email
                res['tel'] = e_info.my_tel
                res['parent_tel'] = e_info.parent_tel

            if e_graduate_info and e_graduate_info.school_code:
                res['school'] = SchoolModel.query.filter_by(code=e_graduate_info.school_code).first().name

        # 최종 제출한 지원자
        else:
            if str(applicant.graduate_type.name) != 'GED':
                applicant = db.session.query(UserModel, InfoModel, ApplyStatusModel, GraduateInfoModel) \
                    .join(InfoModel).join(ApplyStatusModel).join(GraduateInfoModel) \
                    .filter(UserModel.user_id == user_id) \
                    .filter(ApplyStatusModel.final_submit).first()
            else:
                applicant = db.session.query(UserModel, InfoModel, ApplyStatusModel) \
                    .join(InfoModel).join(ApplyStatusModel) \
                    .filter(UserModel.user_id == user_id) \
                    .filter(ApplyStatusModel.final_submit).first()

            academic = {
                'school_name': SchoolModel.query.filter_by(code=applicant.GraduateInfoModel.school_code).first().name,
                'student_class': applicant.GraduateInfoModel.student_class,
                'student_grade': applicant.GraduateInfoModel.student_grade,
                'student_number': applicant.GraduateInfoModel.student_number,
                'graduate_year': applicant.GraduateInfoModel.graduate_year,
                'is_ged': False
            } if str(applicant.UserModel.graduate_type.name) != 'GED' else {'is_ged': True}

            res = {
                'user_id': user_id,
                'main': {
                    'img_path': applicant.InfoModel.img_path,
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
                'exam_code': applicant.ApplyStatusModel.exam_code,
            }

        return self.unicode_safe_json_dumps(res, 200)


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
                    'korean': grade.korean.name,
                    'social': grade.social.name,
                    'history': grade.history.name,
                    'math': grade.math.name,
                    'science': grade.science.name,
                    'tech': grade.tech.name,
                    'english': grade.english.name
                } for grade in graduate_grade]
            }

        return self.unicode_safe_json_dumps(res, 200)


@api.resource('/excel/<user_id>')
class PrintExcelOne(BaseResource):
    @swag_from(PRINT_EXCEL_ONE_POST)
    @check_auth()
    def post(self, user_id):
        user = UserModel.query.filter_by(user_id=user_id).first()

        column = {}

        if user:
            column = create_csv_row(user_id)
        else:
            abort(400)

        si = StringIO()
        si.write(u'\ufeff')
        f = csv.writer(si)

        f.writerow([i[0] for i in column])
        f.writerow([i[1] for i in column])

        res = make_response(si.getvalue(), 201)
        res.headers['Content-Disposition'] = "attachment; filename=applicants.csv"
        res.headers['Content-type'] = "text/csv"

        return res


@api.resource('/exam_table/<user_id>')
class PrintExamTableOne(BaseResource):
    @swag_from(PRINT_EXAM_TABLE_ONE_GET)
    @check_auth()
    def get(self, user_id):
        applicant = create_exam_table(user_id)

        return self.unicode_safe_json_dumps(applicant, 200)
