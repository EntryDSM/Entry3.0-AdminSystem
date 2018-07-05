from datetime import timedelta
import os


class Config:
    SERVICE_NAME = 'entry3.0_admin'
    SERVICE_NAME_UPPER = SERVICE_NAME.upper()
    DOMAIN = None

    RUN_SETTING = {
        'threaded': True
    }

    # Secret key for any 3-rd party libraries
    SECRET_KEY = os.getenv('SECRET_KEY', 'lo02pfu743jjdildp20djl03kdk3iodj')

    JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=6)
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=3)
    JWT_HEADER_TYPE = 'JWT'

    MYSQL_SETTING = {
        'name': SERVICE_NAME_UPPER,
        'user': 'root',
        'password': 'germany33',
        'host': 'localhost',
        'port': 3306
    }

    SWAGGER = {
        'title': SERVICE_NAME,
        'specs_route': os.getenv('SWAGGER_URI', '/docs'),
        'uiversion': 3,

        'info': {
            'title': SERVICE_NAME + ' API',
            'version': '1.0',
            'description': ''
        },
        'basePath': '/ '
    }

    SWAGGER_TEMPLATE = {
        'schemes': [
            'http'
        ],
        'tags': [
            {
                'name': 'Some Tag',
                'description': 'Some API'
            },
        ]
    }
