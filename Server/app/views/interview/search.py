from flasgger import swag_from
from flask import Blueprint, request, Response
from flask_restful import Api

from app.docs.sample import *
from app.views import BaseResource

from app.models import db
from app.models.interviewData import *
from app.models.userData import UserModel, ApplyStatusModel
from app.models.infoData import InfoModel

api = Api(Blueprint('interview search', __name__))
api.prefix = '/interviews'


@api.resource('/search')
class Search(BaseResource):
    @swag_from(SAMPLE_POST)
    def get(self):
        search_word = request.args.get('search')
        exam_code = request.args.get('code', None)

        join_res = db.session.query(UserModel, InfoModel, ApplyStatusModel, InterviewData) \
            .join(InfoModel) \
            .join(ApplyStatusModel) \
            .join(InterviewData) \
            # .join(ApplyStatusModel.final_submit is True) \

        filtered_res = join_res\
            .filter(InfoModel.name == search_word) \
            .filter(ApplyStatusModel.final_submit is True)

        if exam_code is not None:
            filtered_res.filter(InfoModel.exam_code)

        print(filtered_res.all())

        return str(filtered_res.all())

        # interview_list = InterviewData(search_word)


# @api.resource('/save')
# class Peewee(BaseResource):
#     def post(self):
#         id = request.form['id']
#         # code = int(request.form['code'])
#
#         # SQL 에서 INSERT INTO 문
#         row = ZeroTest(id=id)
#         db.session.add(row)
#         db.session.commit()
#
#         return Response('success insert user', 201)
