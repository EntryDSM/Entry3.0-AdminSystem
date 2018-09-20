import pytest
import pymysql

from werkzeug.security import generate_password_hash

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
    db_cursor = connection.cursor()

    yield db_cursor

    # teardown
    del_list = ['admin', 'user', 'apply_status', 'document',
                'info', 'school', 'graduate_grade', 'graduate_score', 'graduate_info', 'ged_score']
    for table in del_list:
        db_cursor.execute("DELETE FROM " + table + ';')
    connection.commit()
    connection.close()


@pytest.fixture(scope="function")
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

    return fake_user
