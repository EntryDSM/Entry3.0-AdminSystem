VIEW_APPLICANTS_GET = {
    'tags': ['[Search]'],
    'description': '지원자들의 목록 검색 API',
    'parameters': [
        {
            'name': 'Authorization',
            'description': 'JWT Token',
            'in': 'header',
            'type': 'str',
            'required': True
        },
        {
            'name': 'name',
            'description': '검색어 : 이름',
            'in': 'query',
            'type': 'str',
            'required': False
        },
        {
            'name': 'region',
            'description': '검색어 : 지역(true = 대전, false = 전국)',
            'in': 'query',
            'type': 'str',
            'required': False
        },
        {
            'name': 'admission',
            'description': '검색어 : 전형(1 = 일반, 2 = 마이스터, 3 = 사회통합)',
            'in': 'query',
            'type': 'str',
            'required': False
        },
        {
            'name': 'receipt',
            'description': '원서(종이 문서) 제출 여부(true or false)',
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
        }
    }
}

PRINT_EXCEL_ALL_APPLICANTS_POST = {
    'tags': ['[Print data]'],
    'description': '원하는 학생들의 상세정보를 엑셀로 출력(text/csv)',
    'parameters': [
        {
            'name': 'Authorization',
            'description': 'JWT Token',
            'in': 'header',
            'type': 'str',
            'required': True
        },
        {
            'name': 'users',
            'description': '엑셀로 출력할 학생들의 id 를 담은 리스트 ex) ["geni429", "flouie74", "hub_code"]',
            'in': 'json',
            'type': 'list',
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
                }
            }
        }
    }
}


PRINT_EXAM_TABLE_ALL_APPLICANTS_POST = {
    'tags': ['[Print data]'],
    'description': '수험표 출력에 쓰이는 정보를 조회 *(전형 정보 번역 출력 바람)',
    'parameters': [
        {
            'name': 'Authorization',
            'description': 'JWT Token',
            'in': 'header',
            'type': 'str',
            'required': True
        },
        {
            'name': 'users',
            'description': '엑셀로 출력할 학생들의 id 를 담은 리스트 ex) ["geni429", "flouie74", "hub_code"]',
            'in': 'json',
            'type': 'list',
            'required': True
        }
    ],
    'responses': {
        '200': {
            'description': '조회 성공',
            'examples': {
                '': [
                    {
                        'exam_code': '110021',
                        'name': '정근철',
                        'middle_school': '해솔중학교',
                        'region': '전국',
                        'admission': 'NORMAL',
                        'receipt_code': '004'
                    },
                    {
                        'exam_code': '110023',
                        'name': '정철근',
                        'middle_school': '솔해중학교',
                        'region': '대전',
                        'admission': 'NORMAL',
                        'receipt_code': '012'
                    },
                    {
                        'exam_code': '230044',
                        'name': '정긍철',
                        'middle_school': '새살이솔솔중학교',
                        'region': '전국',
                        'admission': 'SOCIAL',
                        'receipt_code': '100'
                    }
                ]
            }
        }
    }
}
