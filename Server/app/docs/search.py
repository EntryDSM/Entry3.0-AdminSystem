VIEW_APPLICANTS_GET = {
    'tags': ['[지원자 관리]'],
    'description': '지원자들의 목록을 검색하여 확인하는 사살상 메인 API',
    'parameters': [
        {
            'name': 'Authorization',
            'description': 'JWT Token',
            'in': 'header',
            'type': 'str',
            'required': True
        },
        {
            'name': 'search',
            'description': '검색어(*조건* region => true(대전) or false(전국), type => 1(normal) or 2(meister) or 3(social))',
            'in': 'query',
            'type': 'str',
            'required': False
        },
        {
            'name': 'condition',
            'description': '검색어 조건(name or region or type)',
            'in': 'query',
            'type': 'str',
            'required': False
        },
        {
            'name': 'submit',
            'description': '제출 여부(true or false)',
            'in': 'query',
            'type': 'str',
            'required': False
        },
        {
            'name': 'payment',
            'description': '전형료 납부 여부(true or false)',
            'in': 'query',
            'type': 'str',
            'required': False
        }
    ],
    'responses': {
        '200': {
            'description': '지원자 검색 성공',
            'examples': {
                '조건없는 예시 데이터': [
                    {
                        'receipt': 111,
                        'name': '정경서',
                        'region': '전국',
                        'school': '군서중학교',
                        'type': 'normal',
                        'submit': True,
                        'payment': True
                    },
                    {
                        'receipt': 112,
                        'name': '정근철',
                        'region': '전국',
                        'school': '해솔중',
                        'type': 'meister',
                        'submit': False,
                        'payment': True
                    },
                    {
                        'receipt': 113,
                        'name': '엔트리',
                        'region': '전국',
                        'school': '서울대학교사범대학부설중학교',
                        'type': 'social',
                        'submit': False,
                        'payment': False
                    }
                ]
            }
        },
        '400': {
            'description': '요청 불가능한 검색 조건'
        }
    }
}
