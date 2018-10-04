from flask import Blueprint, abort, Response
from flask_restful import Api
from flasgger import swag_from

from app.views import BaseResource, check_auth, untrim_as_zero

from app.models import db
from app.models.user_models import UserModel, ApplyStatusModel, InfoModel

from app.docs.conversion import *

api = Api(Blueprint(__name__, __name__))

api.prefix = '/applicants/details'


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
            .filter(ApplyStatusModel.final_submit).first()

        if not applicant:
            abort(400)

        # 수험번호 첫자리 - 전형
        exam_code = str(applicant.UserModel.admission.value)
        print(exam_code)

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
        print(exam_code)
        # 수험번호 셋쩨&마지막세자리 - 전형세부&접수번호
        exam_code = exam_code + str(applicant.UserModel.admission_detail.value) \
                    + untrim_as_zero(applicant.ApplyStatusModel.receipt_code)
        print(exam_code)
        target = ApplyStatusModel.query.filter_by(user_id=user_id).first()

        target.exam_code = exam_code
        db.session.commit()

        return Response('', 201)


@api.resource('/final_submit/<user_id>')
class ReversalFinalSubmit(BaseResource):
    @swag_from(REVERSAL_FINAL_SUBMIT_PATCH)
    @check_auth()
    def patch(self, user_id):
        status = ApplyStatusModel.query.filter_by(user_id=user_id).first()

        if not status:
            abort(400)

        status.final_submit = False
        db.session.commit()

        return Response('', 201)
