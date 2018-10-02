import csv
from io import StringIO

from flask import Blueprint, request, abort, make_response
from flask_restful import Api
from flasgger import swag_from

from app.views import BaseResource, check_auth, create_csv_row, create_exam_table

from app.models import db
from app.models.user_models import UserModel, InfoModel, ApplyStatusModel, AdmissionChoice

from app.docs.search import *

api = Api(Blueprint(__name__, __name__))


@api.resource('/applicants')
class ViewApplicants(BaseResource):
    @swag_from(VIEW_APPLICANTS_GET)
    @check_auth()
    def get(self):
        search_name = request.args.get('name', default='')
        search_region = request.args.get('region', default='')
        search_admission = request.args.get('admission', default='')
        checking_receipt = request.args.get('receipt', default='false')
        checking_payment = request.args.get('payment', default='false')

        joined_res = db.session.query(UserModel, InfoModel, ApplyStatusModel) \
            .join(InfoModel) \
            .join(ApplyStatusModel)\
            .filter(ApplyStatusModel.final_submit)

        # 제출-전형료 조건 없음
        if not self.str_to_bool(checking_receipt) and not self.str_to_bool(checking_payment):
            filtered_res = joined_res

        # 제출-전형료 조건 있음
        else:
            filtered_res = joined_res \
                .filter(ApplyStatusModel.receipt == self.str_to_bool(checking_receipt)) \
                .filter(ApplyStatusModel.payment == self.str_to_bool(checking_payment))

        if search_name:
            filtered_res = filtered_res.filter(InfoModel.name.like('%' + search_name + '%')).all()
        if search_admission:
            filtered_res = filtered_res.filter(UserModel.admission == AdmissionChoice(int(search_admission))).all()
        if search_region:
            filtered_res = filtered_res.filter(UserModel.region == self.str_to_bool(search_region)).all()

        return self.unicode_safe_json_dumps([{
            'user_id': student.UserModel.user_id,
            'receipt_code': student.ApplyStatusModel.receipt_code,
            'name': student.InfoModel.name,
            'region': '대전' if student.UserModel.region is True else '전국',
            'admission': student.UserModel.admission.name,
            'receipt': student.ApplyStatusModel.receipt,
            'payment': student.ApplyStatusModel.payment
        } for student in filtered_res], 200) if filtered_res else []


@api.resource('/applicants/excel')
class PrintExcelAllApplicants(BaseResource):
    @swag_from(PRINT_EXCEL_ALL_APPLICANTS_POST)
    @check_auth()
    def post(self):
        users = list(request.json['users'])
        si = StringIO()
        si.write(u'\ufeff')
        f = csv.writer(si)

        rows = [create_csv_row(user_id) for user_id in users]
        f.writerow([i[0] for i in rows[0]])
        for r in rows:
            f.writerow([i[1] for i in r])

        res = make_response(si.getvalue(), 201)
        res.headers['Content-Disposition'] = "attachment; filename=applicants.csv"
        res.headers['Content-type'] = "text/csv"

        return res


@api.resource('/applicants/exam_table')
class PrintExamTableAllApplicants(BaseResource):
    @swag_from(PRINT_EXAM_TABLE_ALL_APPLICANTS_POST)
    @check_auth()
    def post(self):
        users = list(request.json['users'])

        tables = [create_exam_table(user) for user in users]

        return self.unicode_safe_json_dumps(tables, 200)
