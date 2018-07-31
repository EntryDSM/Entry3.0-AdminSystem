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
            'name': 'receipt',
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
                        'user_id': 'flouie74',
                        'receipt_code': 111,
                        'name': '정경서',
                        'region': '전국',
                        'type': 'normal',
                        'receipt': True,
                        'payment': True
                    },
                    {
                        'user_id': 'dld2133',
                        'receipt_code': 112,
                        'name': '정근철',
                        'region': '전국',
                        'type': 'meister',
                        'receipt': False,
                        'payment': True
                    },
                    {
                        'user_id': 'llll111',
                        'receipt_code': 113,
                        'name': '엔트리',
                        'region': '전국',
                        'type': 'social',
                        'receipt': False,
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

PRINT_APPLICANTS_AS_EXCEL_POST = {
    'tags': ['[지원자 관리]'],
    'description': '원하는 학생들의 정보를 엑셀로 출력',
    'parameters': [
        {
            'name': 'Authorization',
            'description': 'JWT Token',
            'in': 'header',
            'type': 'str',
            'required': True
        }
    ],
    "produces": [
       "text/csv"
    ],
    'responses': {
        '201': {
            'description': 'Success : csv file response ',
            'content-type': 'text/csv',
            'examples': {
                'Response Headers': {
                    'Content-Disposition': 'attachment; filename=applicants.csv',
                    'Content-type': 'text/csv'
                },
                'Response Body': 'receipt_code,name,region,type,receipt,payment\n'
                        '112,차태민,전국,meister,False,False\n'
                        '113,연준모,대전,normal,True,True\n'
                        '114,백팡민,전국,normal,True,False\n'
            }
        }
    }
}
