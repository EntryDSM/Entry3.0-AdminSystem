from functools import wraps
import time
import ujson

from flask import Response, abort, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource

from app.models.interviewData import AdminModel


def after_request(response):
    """
    Set header - X-Content-Type-Options=nosniff, X-Frame-Options=deny before response
    """
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'deny'

    return response


def check_auth():
    """
    Check about auth
    - jwt token check
    - whether account is in model
    """
    def decorator(original_func):
        @wraps(original_func)
        @jwt_required
        def wrapper(*args, **kwargs):
            if not AdminModel.query.filter_by(admin_id=get_jwt_identity()).first():
                abort(401)
            return original_func(*args, **kwargs)
        return wrapper
    return decorator


def check_json(essential_keys):
    """
    Check about essential json data
    - whether data is json
    - whether equal type
    """
    def decorator(original_func):
        @wraps(original_func)
        def wrapper(*args, **kwargs):
            if not request.is_json:
                abort(406)

            for k, t in essential_keys.items():
                if k not in request.json or type(request.json[k]) is not t:
                    print(k)
                    abort(400)

            return original_func(*args, **kwargs)
        return wrapper
    return decorator


class BaseResource(Resource):
    def __init__(self):
        self.now = time.strftime('%Y-%m-%d %H:%M:%S')

    @classmethod
    def unicode_safe_json_dumps(cls, data, status_code=200, **kwargs) -> Response:
        return Response(
            ujson.dumps(data, ensure_ascii=False),
            status_code,
            content_type='application/json; charset=utf8',
            **kwargs
        )

    @classmethod
    def str_to_bool(cls, val):
        if val == 'false':
            val = None
        return bool(val)

    class ValidationError(Exception):
        def __init__(self, description='', *args):
            self.description = description

            super(BaseResource.ValidationError, self).__init__(*args)


class Router:
    def __init__(self, app=None):
        if app is not None:
            self.init_app(app)

    def init_app(self, app):
        app.after_request(after_request)

        from app.views import sample
        app.register_blueprint(sample.api.blueprint)

        from app.views import auth, search
        app.register_blueprint(auth.api.blueprint)
        app.register_blueprint(search.api.blueprint)
