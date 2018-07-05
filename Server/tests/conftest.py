import pytest
import pymysql

from app import create_app
from config.test import TestConfig


@pytest.fixture(scope='session')
def flask_app():
    """
    Provide flask instance for test
        return: Flask instance
        teardown: pop at context
    """
    app = create_app(TestConfig)
    app_context = app.app_context()
    app_context.push()

    yield app

    # teardown
    app_context.pop()


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
    db_name = mysql_setting.pop('name')
    connection = pymysql.connect(**mysql_setting)
    db_cursor = connection.cursor()

    yield db_cursor

    # teardown
    sql = "DROP DATABASE " + db_name
    db_cursor.execute(sql)
    connection.commit()
    connection.close()
