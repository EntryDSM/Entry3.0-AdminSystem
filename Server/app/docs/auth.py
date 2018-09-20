from app.docs import SAMPLE_ACCESS_TOKEN, SAMPLE_REFRESH_TOKEN

AUTH_POST = {
    'tags': ['[Account]'],
    'description': '관리자 계정 로그인',
    'parameters': [
        {
            'name': 'id',
            'description': '관리자 계정 id',
            'in': 'json',
            'type': 'str',
            'required': True
        },
        {
            'name': 'pw',
            'description': '관리자 계정 password',
            'in': 'json',
            'type': 'str',
            'required': True
        }
    ],
    'responses': {
        '201': {
            'description': '로그인 성공',
            'examples': {
                '': {
                    'accessToken': SAMPLE_ACCESS_TOKEN,
                    'refreshToken': SAMPLE_REFRESH_TOKEN
                }
            }
        },
        '401': {
            'description': '존재하지 않는 유저이거나 비밀번호 불일치'
        }
    }
}
