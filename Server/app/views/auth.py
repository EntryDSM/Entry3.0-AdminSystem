from flask import Blueprint, request, abort
from flask_restful import Api
from flask_jwt_extended import create_access_token, create_refresh_token
from werkzeug.security import check_password_hash
from flasgger import swag_from

from app.views import BaseResource, check_json

from app.models.interviewData import AdminModel

from app.docs.auth import AUTH_POST

api = Api(Blueprint(__name__, __name__))


@api.resource('/auth')
class Auth(BaseResource):
    @swag_from(AUTH_POST)
    @check_json({'id': str, 'pw': str})
    def post(self):
        user = AdminModel.query.filter_by(admin_id=request.json['id']).first()

        return ({
            'accessToken': create_access_token(user.admin_id),
            'refreshToken': create_refresh_token(user.admin_id)
        }, 200) if user and check_password_hash(user.password, request.json['pw']) else abort(401)
