VIEW_APPLICANT_DETAILS_GET = {
    'tags': ['[Details]'],
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
                        'img_path': '서버어딘가',
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
                    'academic': {
                        'school_name': '해솔중학교',
                        'student_class': 3,
                        'student_grade': 3,
                        'student_number': 33,
                        'graduate_year': 2019,
                        'is_ged': False
                    },
                    'exam_code': '10011'
                },
                '검정고시': {
                    'main': {
                        'img_path': '서버어딘가',
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
                    'academic': {
                        'is_ged': False
                    },
                    'exam_code': '20022'
                }
            }
        },
        '400': {
            'description': '존재하지 않는 유저'
        }
    }
}

VIEW_APPLICANT_GRADE_GET = {
    'tags': ['[Details]'],
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
                    'school_grade': {
                        'first_grade': 43.12,
                        'second_grade': 45,
                        'third_grade': 60,
                        'conversion_score': 140.12
                    },
                    'score': {
                        'attendance_score': 15,
                        'volunteer_score': 15,
                        'final_score': 298
                    },
                    'volunteer_time': 60,
                    'subject_grade': [
                        {
                            'semester': 1,
                            'korean': 'A',
                            'social': 'A',
                            'history': 'A',
                            'math': 'A',
                            'science': 'A',
                            'tech': 'A',
                            'english': 'A'
                        },
                        {
                            'semester': 2,
                            'korean': 'A',
                            'social': 'B',
                            'history': 'A',
                            'math': 'B',
                            'science': 'A',
                            'tech': 'A',
                            'english': 'C'
                        },
                        {
                            'semester': 3,
                            'korean': 'A',
                            'social': 'A',
                            'history': 'A',
                            'math': 'C',
                            'science': 'A',
                            'tech': 'A',
                            'english': 'A'
                        },
                        {
                            'semester': 4,
                            'korean': 'A',
                            'social': 'B',
                            'history': 'A',
                            'math': 'A',
                            'science': 'A',
                            'tech': 'A',
                            'english': 'A'
                        },
                        {
                            'semester': 5,
                            'korean': 'A',
                            'social': 'A',
                            'history': 'A',
                            'math': 'A',
                            'science': 'A',
                            'tech': 'A',
                            'english': 'A'
                        }
                    ]
                },
                '검정고시': {
                    'final_score': 280.12,
                    'ged_grade': 95.12
                }
            }
        },
        '400': {
            'description': '존재하지 않는 유저'
        }
    }
}

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

PRINT_EXCEL_ONE_POST = {
    'tags': ['[Print data]'],
    'description': '특정 지원자 정보를 엑셀로 출력(csv 파일 생성)',
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
            'description': '상세정보를 엑셀로 출력할 지원자의 id',
            'in': 'path',
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
                }
            }
        }
    }
}

PRINT_EXAM_TABLE_ONE_GET = {
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
            'name': 'user_id',
            'description': '수험표를 출력할 지원자의 id',
            'in': 'path',
            'type': 'str',
            'required': True
        }
    ],
    'responses': {
        '200': {
            'description': '조회 성공',
            'examples': {
                '': {
                    'img_path': '서버어딘가',
                    'exam_code': '110021',
                    'name': '정근철',
                    'middle_school': '해솔중학교',
                    'region': '전국',
                    'admission': 'NORMAL',
                    'receipt_code': '004'
                }
            }
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
