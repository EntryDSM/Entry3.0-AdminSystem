import pytest
import pymysql

from werkzeug.security import generate_password_hash
from flask_jwt_extended import create_access_token, create_refresh_token

from app import create_app
from config.test import TestConfig
from app.models import db
from app.models.admin_models import AdminModel


@pytest.fixture(scope='session')
def flask_app():
    """
    Provide flask instance for test
        return: Flask instance
        teardown: pop at context
    """
    app = create_app(TestConfig)

    return app


@pytest.fixture(scope='session')
def flask_client(flask_app):
    """
    Provide flask testing client
        param: flask_app - fixture
        return: flask testing client
    """
    return flask_app.test_client()


@pytest.fixture(scope="session")
def mysql_client_for_test(flask_app):
    """
    Create MySQL client for drop database
        param: flask_app - fixture
        return: MySQL client
        teardown: drop database
    """
    mysql_setting = flask_app.config['MYSQL_SETTING']
    connection = pymysql.connect(**mysql_setting)
    # db_name = mysql_setting.pop('db')

    yield connection

    # teardown
    del_list = ['admin', 'user', 'apply_status', 'document',
                'info', 'school', 'graduate_grade', 'graduate_score', 'graduate_info', 'ged_score']
    for table in del_list:
        connection.cursor().execute("DELETE FROM " + table + ';')
    connection.commit()
    connection.close()


@pytest.fixture(scope="session")
def create_fake_account(flask_app):
    fake_user = {
        'admin_id': 'geni429',
        'name': '정근철',
        'email': 'geni429@gmail.com',
        'password': generate_password_hash('1234qwer')
    }

    user = AdminModel(**fake_user)
    with flask_app.app_context():
        db.session.add(user)
        db.session.commit()

    fake_user['password'] = '1234qwer'

    with flask_app.app_context():
        fake_user['accessToken'] = 'JWT {}'.format(create_access_token(fake_user['admin_id']))
        fake_user['refreshToken'] = 'JWT {}'.format(create_refresh_token(fake_user['admin_id']))

    return fake_user


@pytest.fixture(scope="session")
def create_forbidden_token(flask_app):
    with flask_app.app_context():
        access_token = 'JWT {}'.format(create_access_token('userId'))

    return access_token
