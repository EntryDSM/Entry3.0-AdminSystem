from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flasgger import Swagger

from app.models.userData import User
from app.models.infoData import Info
from app.models import mysql_db
from app.views import Router

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

    mysql_db.connect()
    mysql_db.create_tables([User, Info])

    return app_
