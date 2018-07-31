from flask import Blueprint, request, abort
from flask_restful import Api
from flasgger import swag_from

from app.views import BaseResource, check_auth

from app.models import db
from app.models.userData import UserModel, ApplyStatusModel
from app.models.infoData import InfoModel, AdmissionChoice
from app.models.gradeData import GraduateInfoModel, GedGradeModel


from app.docs.search import VIEW_APPLICANTS_GET, PRINT_APPLICANTS_AS_EXCEL_POST

api = Api(Blueprint(__name__, __name__))

api.prefix = '/applicants'


@api.resource('/details/<user_id>')
class ViewApplicantsDetails(BaseResource):
    def get(self, user_id):
        applicant = db.session.query(UserModel, InfoModel, ApplyStatusModel, GraduateInfoModel)\
            .join(InfoModel).join(ApplyStatusModel).join(GraduateInfoModel)\
            .filter(UserModel.user_id == user_id).first()

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

        return {
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
        }, 200


@api.resource('/grade/<user_id>')
class ViewApplicantsGrade(BaseResource):
    def get(self, user_id):
        pass


@api.resource('/receipt/<user_id>')
class ConvertToTrueReceipt(BaseResource):
    def post(self, user_id):
        pass


@api.resource('/payment/<user_id>')
class ConvertToTruePayment(BaseResource):
    def post(self, user_id):
        pass


@api.resource('/exam_code/<user_id>')
class IssueExamCode(BaseResource):
    def post(self, user_id):
        pass
