from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flasgger import Swagger

from app.views import Router
from app.models import db

# WEB_FILE_ROOT_DIR = '../web_files'


def create_app(*config_cls):
    """
    Create and initialize Flask instance
    """

    app_ = Flask(
        __name__,
        # static_folder='{}/static'.format(WEB_FILE_ROOT_DIR),
        # template_folder='{}/templates'.format(WEB_FILE_ROOT_DIR)
    )

    for config in config_cls:
        app_.config.from_object(config)

    CORS().init_app(app_)
    JWTManager().init_app(app_)
    Swagger(template=app_.config['SWAGGER_TEMPLATE']).init_app(app_)
    Router().init_app(app_)

    db.init_app(app_)
    # db.create_all(app=app_)

    return app_
