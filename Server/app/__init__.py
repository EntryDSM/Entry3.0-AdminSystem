import os

from flask import Flask, send_from_directory, render_template
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flasgger import Swagger

from app.views import *
from app.models import db

# WEB_FILE_ROOT_DIR = '../web_files'


def create_app(*config_cls):
    """
    Create and initialize Flask instance
    """

    app_ = Flask(
        __name__,
        static_folder='{}/static'.format('../app'),
        static_url_path='/',
        template_folder='{}/static'.format('../app')
    )

    for config in config_cls:
        app_.config.from_object(config)

    CORS().init_app(app_)
    JWTManager().init_app(app_)
    Swagger(template=app_.config['SWAGGER_TEMPLATE']).init_app(app_)
    Router().init_app(app_)

    db.init_app(app_)
    db.create_all(app=app_)

    app_.after_request(after_request)
    app_.register_error_handler(Exception, error_handler)

    @app_.route('/')
    def index():
        return render_template('index.html')

    return app_
