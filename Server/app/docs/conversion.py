CONVERT_RECEIPT_VALUE_PATCH = {
    'tags': ['[Handle information]'],
    'description': '특정 지원자의 원서(우편 서류) 여부를 도착(true)으로 변경 하거나 반대로',
    'parameters': [
        {
            'name': 'Authorization',
            'description': 'JWT Token',
            'in': 'header',
            'type': 'str',
            'required': True
        },
        {
            'name': 'user_id',
            'description': '변경하고 싶은 지원자의 id',
            'in': 'path',
            'type': 'str',
            'required': True
        }
    ],
    'responses': {
        '201': {
            'description': '원서여부 변경 성공'
        },
        '400': {
            'description': '존재하지 않는 유저'
        }
    }
}

CONVERT_PAYMENT_VALUE_PATCH = {
    'tags': ['[Handle information]'],
    'description': '특정 지원자의 전형료 여부를 제출(true)로 변경하거나 반대로',
    'parameters': [
        {
            'name': 'Authorization',
            'description': 'JWT Token',
            'in': 'header',
            'type': 'str',
            'required': True
        },
        {
            'name': 'user_id',
            'description': '변경하고 싶은 지원자의 id',
            'in': 'path',
            'type': 'str',
            'required': True
        }
    ],
    'responses': {
        '201': {
            'description': '전형료 여부 변경 성공'
        },
        '400': {
            'description': '존재하지 않는 유저'
        }
    }
}

ISSUE_EXAM_CODE_PATCH = {
    'tags': ['[Handle information]'],
    'description': '수험번호 발급 원칙에 따라 발급',
    'parameters': [
        {
            'name': 'Authorization',
            'description': 'JWT Token',
            'in': 'header',
            'type': 'str',
            'required': True
        },
        {
            'name': 'user_id',
            'description': '수험번호를 발급하고 싶은 지원자의 id',
            'in': 'path',
            'type': 'str',
            'required': True
        }
    ],
    'responses': {
        '201': {
            'description': '수험번호 발급 성공'
        },
        '400': {
            'description': '존재하지 않는 유저'
        }
    }
}


REVERSAL_FINAL_SUBMIT_PATCH = {
    'tags': ['[Handle information]'],
    'description': '최종 제출 번복',
    'parameters': [
        {
            'name': 'Authorization',
            'description': 'JWT Token',
            'in': 'header',
            'type': 'str',
            'required': True
        },
        {
            'name': 'user_id',
            'description': '변경하고 싶은 지원자의 id',
            'in': 'path',
            'type': 'str',
            'required': True
        }
    ],
    'responses': {
        '201': {
            'description': '최종제출 번복 성공'
        },
        '400': {
            'description': '존재하지 않는 유저'
        }
    }
}
