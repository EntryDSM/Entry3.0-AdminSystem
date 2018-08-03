VIEW_APPLICANTS_DETAILS_GET = {
    'tags': ['[성적]'],
    'description': '특정 지원자의 상세정보 조회',
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
            'description': '상세정보를 조회하고 싶은 지원자의 id',
            'in': 'path',
            'type': 'str',
            'required': True
        }
    ],
    'responses': {
        '200': {
            'description': '상세정보 조회 성공',
            'examples': {
                '졸업자 or 졸업 예정자': {
                    'main': {
                        'name': '정근철',
                        'admission': 'will',
                        'region': '전국'
                    },
                    'basic': {
                        'name': '정근철',
                        'tel': '01011112222',
                        'address': '경기도 파주시 패쇄로'
                    },
                    'parent': {
                        'name': '어머님',
                        'tel': '01099992222'
                    },
                    'graduate_info': {
                        'school_name': '해솔중학교',
                        'student_number': 10111,
                        'graduated_year': 2019,
                        'is_ged': False,
                        'exam_code': None
                    }
                },
                '검정고시': {
                    'main': {
                        'name': '김성현',
                        'admission': 'ged',
                        'region': '대전'
                    },
                    'basic': {
                        'name': '김성현',
                        'tel': '01013112622',
                        'address': '대전광역시 서구 둔산동'
                    },
                    'parent': {
                        'name': '마더',
                        'tel': '01093992522'
                    },
                    'graduate_info': {
                        'school_name': None,
                        'student_number': None,
                        'graduated_year': None,
                        'is_ged': True,
                        'exam_code': None
                    }
                }
            }
        },
        '400': {
            'description': '존재하지 않는 유저'
        }
    }
}

VIEW_APPLICANTS_GRADE_GET = {
    'tags': ['[성적]'],
    'description': '특정 지원자의 성적 조회',
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
            'description': '성적을 조회하고 싶은 지원자의 id',
            'in': 'path',
            'type': 'str',
            'required': True
        }
    ],
    'responses': {
        '200': {
            'description': '성적 조회 성공',
            'examples': {
                '졸업 or 졸업 예정자': {
                    'grades': {
                        'first_grade': 43.12,
                        'second_grade': 45,
                        'third_grade': 60,
                        'conversion_score': 140.12
                    },
                    'scores': {
                        'attendance_score': 15,
                        'volunteer_score': 15,
                        'final_score': 298
                    },
                    'volunteer_time': 60,
                    'subject_grades': {
                        'first_first': ["A", "A", "A", "A", "A", "A", "A"],
                        'first_second': ["A", "A", "A", "B", "A", "A", "A"],
                        'second_first': ["A", "A", "A", "A", "A", "A", "A"],
                        'second_second': ["A", "A", "A", "B", "A", "A", "A"],
                        'third_first': ["A", "A", "A", "A", "B", "A", "A"]
                    }
                },
                '검정고시': {
                    'final_score': 280.12,
                    'grade': 95.12
                }
            }
        },
        '400': {
            'description': '존재하지 않는 유저'
        }
    }
}

CONVERT_TO_TRUE_RECEIPT_PATCH = {
    'tags': ['[정보 수정]'],
    'description': '특정 지원자의 원서(우편 서류) 여부를 도착(true)으로 변경',
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

CONVERT_TO_TRUE_PAYMENT_PATCH = {
    'tags': ['[정보 수정]'],
    'description': '특정 지원자의 전형료 여부를 제출(true)로 변경',
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
    'tags': ['[정보 수정]'],
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
