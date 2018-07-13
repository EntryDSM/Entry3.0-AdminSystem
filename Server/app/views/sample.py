from flasgger import swag_from
from flask import Blueprint, request, Response
from flask_restful import Api

from app.docs.sample import *
from app.views import BaseResource
# from app.models.userData import User, Dot

api = Api(Blueprint('/sample', __name__))
api.prefix = '/prefix'


@api.resource('/sample')
class Sample(BaseResource):
    @swag_from(SAMPLE_POST)
    def post(self):
        payload = request.json

        if not payload['age']:
            raise self.ValidationError('Age is 0!')

        return self.unicode_safe_json_dumps(payload, 201)


@api.resource('/save')
class Peewee(BaseResource):
    def post(self):
        pass
