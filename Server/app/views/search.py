from flask import Blueprint, request, abort
from flask_restful import Api
from flask_jwt_extended import create_access_token, create_refresh_token
from werkzeug.security import check_password_hash
from flasgger import swag_from

from app.views import BaseResource, check_json

from app.models import db
from app.models.userData import UserModel, ApplyStatusModel
from app.models.infoData import InfoModel
from app.models.gradeData import GraduateInfoModel

from app.docs.auth import AUTH_POST

api = Api(Blueprint(__name__, __name__))


@api.resource('/applicants')
class ViewApplicants(BaseResource):
    def get(self):
        search_word = request.args.get('search')
        search_condition = request.args.get('condition')
        checking_submit = request.args.get('submit')
        checking_payment = request.args.get('payment')

        join_res = db.session.query(UserModel, GraduateInfoModel, InfoModel, ApplyStatusModel)\
            .filter(UserModel.user_id == GraduateInfoModel.user_id)\
            .filter(UserModel.user_id == InfoModel.user_id).filter(UserModel.user_id == ApplyStatusModel.user_id)\
            .all()

        res = []

        def criteria_search(data, submit, payment):
                res.append({
                    'receipt_code': data.InfoModel.receipt_code,
                    'name': data.InfoModel.name,
                    'region': data.InfoModel.region,
                    'school': data.GraduateInfoModel.school_name,
                    'type': str(data.InfoModel.admission).split('.')[1].lower(),
                    'submit': data.ApplyStatusModel.final_submit,
                    'payment': data.ApplyStatusModel.payment
                })

        if search_condition == "name":
            for students in join_res:
                if students.InfoModel.name == search_word:
                    criteria_search(students, checking_submit, checking_payment)

        elif search_condition == "region":
            for students in join_res:
                if str(students.InfoModel.region).lower() == search_word:
                    criteria_search(students, checking_submit, checking_payment)

        elif search_condition == "type":
            for students in join_res:
                if str(students.InfoModel.admission).split('.')[1].lower() == search_word:
                    criteria_search(students, checking_submit, checking_payment)

        return (res, 200) if res else abort(400)


# user - graduate_type
# info - region
# info - receipt_code
# info - name
# apply_status - final_submit
# apply_status - payment
# graduate_info - school_name

# ?search="정근철"&condition="name"&submit="true"&payment="false"
# conditions => name, region, type
