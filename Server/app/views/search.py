import csv
from io import StringIO

from flask import Blueprint, request, abort, make_response
from flask_restful import Api
from flasgger import swag_from

from app.views import BaseResource, check_auth

from app.models import db
from app.models.userData import UserModel, ApplyStatusModel
from app.models.infoData import InfoModel, AdmissionChoice

from app.docs.search import VIEW_APPLICANTS_GET, PRINT_APPLICANTS_AS_EXCEL_POST

api = Api(Blueprint(__name__, __name__))


@api.resource('/applicants')
class ViewApplicants(BaseResource):
    @swag_from(VIEW_APPLICANTS_GET)
    @check_auth()
    def get(self):
        search_word = request.args.get('search')
        search_condition = request.args.get('condition')
        checking_receipt = request.args.get('receipt')
        checking_payment = request.args.get('payment')

        # info(admission, region, receipt_code, name), apply_status(receipt, payment)
        join_res = db.session.query(UserModel, InfoModel, ApplyStatusModel)\
            .join(InfoModel)\
            .join(ApplyStatusModel)\

        if not (checking_receipt and checking_payment):
            # 제출-전형료 조건 없음
            filtering_res = join_res

        else:
            # 제출-전형료 조건 있음
            filtering_res = join_res\
                .filter(ApplyStatusModel.receipt == self.str_to_bool(checking_receipt))\
                .filter(ApplyStatusModel.payment == self.str_to_bool(checking_payment))

        final_res = []

        if search_condition == 'name':
            # 이름이 검색어
            final_res = filtering_res.filter(InfoModel.name.like('%' + search_word + '%')).all()

        elif search_condition == 'region':
            # 지역이 검색어
            final_res = filtering_res.filter(InfoModel.region == self.str_to_bool(search_word)).all()

        elif search_condition == 'type':
            # 전형이 검색어
            final_res = filtering_res.filter(InfoModel.admission == AdmissionChoice(int(search_word))).all()

        elif not (search_word and search_condition):
            # 검색어 없음
            final_res = filtering_res.all()

        else:
            # 요청 불가능한 검색어 조건
            abort(400)

        return self.unicode_safe_json_dumps([{
            'user_id': student.UserModel.user_id,
            'receipt_code': student.InfoModel.receipt_code,
            'name': student.InfoModel.name,
            'region': '대전' if student.InfoModel.region is True else '전국',
            'type': str(student.InfoModel.admission).split('.')[1].lower(),
            'receipt': student.ApplyStatusModel.receipt,
            'payment': student.ApplyStatusModel.payment
        } for student in final_res], 200)


@api.resource('/applicants/excel')
class PrintExcel(BaseResource):
    @swag_from(PRINT_APPLICANTS_AS_EXCEL_POST)
    @check_auth()
    def post(self):
        search_res = request.json
        si = StringIO()
        si.write(u'\ufeff')
        f = csv.writer(si)

        f.writerow(["receipt_code", "name", "region", "type", "receipt", "payment"])
        for r in search_res:
            f.writerow([r["receipt_code"], r["name"], r["region"], r["type"], r["receipt"], r["payment"]])

        res = make_response(si.getvalue(), 201)
        res.headers['Content-Disposition'] = "attachment; filename=applicants.csv"
        res.headers['Content-type'] = "text/csv"

        return res
