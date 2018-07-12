from functools import wraps
import time

import ujson

from flask import Response, abort, after_this_request, g, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource


def after_request(response):
    """
    Set header - X-Content-Type-Options=nosniff, X-Frame-Options=deny before response
    """
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'deny'

    return response


# def auth_required(model):
#     def decorator(fn):
#         @wraps(fn)
#         @jwt_required
#         def wrapper(*args, **kwargs):
#             raise NotImplementedError()
#
#             # return fn(*args, **kwargs)
#         return wrapper
#     return decorator


def check_auth(model):
    """
    Check if token exist or not exist. And Check if account exist or not exist.
    e : If the account does not exist return status code 401
    :param model: DataBaseModel(Document)
    """
    def decorator(original_func):
        @wraps(original_func)
        @jwt_required
        def wrapper(*args, **kwargs):
            if model.objects(id=get_jwt_identity()).first() is None:
                abort(401)

            return original_func(*args, **kwargs)
        return wrapper
    return decorator


# def json_required(required_keys):
#     def decorator(fn):
#         if fn.__name__ == 'get':
#             print('[WARN] JSON with GET method? on "{}()"'.format(fn.__qualname__))
#
#         @wraps(fn)
#         def wrapper(*args, **kwargs):
#             if not request.is_json:
#                 abort(406)
#
#             for key, typ in required_keys.items():
#                 if key not in request.json or not type(request.json[key]) is typ:
#                     abort(400)
#                 if typ is str and not request.json[key]:
#                     abort(400)
#
#             return fn(*args, **kwargs)
#         return wrapper
#     return decorator


def check_json_data(json_keys):
    """
    Verify that requests have data that is considered mandatory
    e1 : If not json 406
    e2 : If the required key is not in the request 400
    :param json_keys: tuple
    """
    def decorator(original_func):
        @wraps(original_func)
        def wrapper(*args, **kwargs):
            if not request.is_json:
                abort(406)

            for key in json_keys:
                if key not in request.json:
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