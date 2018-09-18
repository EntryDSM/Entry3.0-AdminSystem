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

    SQLALCHEMY_DATABASE_URI = "mysql+pymysql://root:germany33@localhost:3306/entry"

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
                'name': '[Account]',
                'description': 'admin account API'
            },
            {
                'name': '[Search]',
                'description': 'Search page API'
            },
            {
                'name': '[Details]',
                'description': 'applicants detail information'
            },
            {
                'name': '[Handle information]',
                'description': 'Processing of applicant information'
            },
            {
                'name': '[Print data]',
                'description': 'print data API'
            }
        ]
    }
