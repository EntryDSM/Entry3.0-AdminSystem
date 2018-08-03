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
                'name': 'Some Tag',
                'description': 'Some API'
            },
            {
                'name': '[계정]',
                'description': 'admin 계정관련 API'
            },
            {
                'name': '[지원자 관리]',
                'description': '지원자 관리 API'
            },
            {
                'name': '[성적]',
                'description': '지원자 학생정보 및 성적 관리 API'
            },
            {
                'name': '[정보 수정]',
                'description': '지원자 정보 수정 API'
            }
        ]
    }
