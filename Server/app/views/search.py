from flask import Blueprint, request, abort
from flask_restful import Api
from flasgger import swag_from

from app.views import BaseResource

from app.models import db
from app.models.userData import UserModel, ApplyStatusModel
from app.models.infoData import InfoModel, AdmissionChoice
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

        join_res = db.session.query(UserModel, InfoModel, ApplyStatusModel, GraduateInfoModel)\
            .join(InfoModel)\
            .join(ApplyStatusModel)\
            .join(GraduateInfoModel)\

        if not (checking_submit and checking_payment):
            print('제출-전형료 조건 없음')
            filtering_res = join_res

        else:
            print('제출-전형료 조건 있음')
            filtering_res = join_res\
                .filter(ApplyStatusModel.final_submit == ViewApplicants.str_to_bool(checking_submit))\
                .filter(ApplyStatusModel.payment == ViewApplicants.str_to_bool(checking_payment))

        final_res = []

        if search_condition == 'name':
            print('이름이 검색어')
            final_res = filtering_res.filter(InfoModel.name.like('%' + search_word + '%')).all()

        elif search_condition == 'region':
            print('지역이 검색어')
            final_res = filtering_res.filter(InfoModel.region == ViewApplicants.str_to_bool(search_word)).all()

        elif search_condition == 'type':
            print('전형이 검색어')
            final_res = filtering_res.filter(InfoModel.admission == AdmissionChoice(int(search_word))).all()

        elif not (search_word and search_condition):
            print('검색어 없음')
            final_res = filtering_res.all()

        else:
            abort(400)

        return [{
            'receipt': student.InfoModel.receipt_code,
            'name': student.InfoModel.name,
            'region': '대전' if student.InfoModel.region is True else '전국',
            'school': student.GraduateInfoModel.school_name,
            'type': str(student.InfoModel.admission).split('.')[1].lower(),
            'submit': student.ApplyStatusModel.final_submit,
            'payment': student.ApplyStatusModel.payment
        } for student in final_res], 200

# user - graduate_type
# info - region
# info - receipt_code
# info - name
# apply_status - final_submit
# apply_status - payment
# graduate_info - school_name

# ?search="정근철"&condition="name"&submit="true"&payment="false"
# conditions => name, region, type
# 전체 다주셈 => 쿼리에 조건 안드감
# 제출한놈 주셈 => subit=true
# 제출안한놈 => submit=false
# 결제한놈주셈 => payment=true
# 결제안한놈 => payment=false
