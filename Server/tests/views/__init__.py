SAMPLE_GRADUATE_USER_ID = '002'
SAMPLE_GED_USER_ID = '009'

SAMPLE_GRADUATE_DETAIL_INFO = {
    'main': {
        'img_path': None,
        'name': 'karl von bismark',
        'admission': 'NORMAL',
        'region': '전국'
    },
    'basic': {
        'name': 'karl von bismark',
        'tel': '010-1234-5888',
        'address': '경기도 용인시 구성 3로 65'
    },
    'parent': {
        'name': 'otto von bismark',
        'tel': '010-1234-5687'
    },
    'academic': {
        'school_name': '엔트리중학교',
        'student_class': 3,
        'student_grade': 3,
        'student_number': 3,
        'graduate_year': 2019,
        'is_ged': False
    },
    'exam_code': '181002'
}

SAMPLE_GRADUATE_DETAIL_GRADE = {
    'school_grade': {
        'first_grade': 45,
        'second_grade': 45,
        'third_grade': 60,
        'conversion_score': 150
    },
    'score': {
        'attendance_score': 15,
        'volunteer_score': 15,
        'final_score': 180
    },
    'volunteer_time': 65,
    'subject_grade': [
        {
            'semester': 1,
            'korean': 'A',
            'social': 'A',
            'history': 'B',
            'math': 'B',
            'science': 'A',
            'tech': 'A',
            'english': 'A'
        },
        {
            'semester': 2,
            'korean': 'A',
            'social': 'A',
            'history': 'B',
            'math': 'B',
            'science': 'A',
            'tech': 'A',
            'english': 'A'
        },
        {
            'semester': 3,
            'korean': 'A',
            'social': 'A',
            'history': 'A',
            'math': 'B',
            'science': 'A',
            'tech': 'A',
            'english': 'A'
        },
        {
            'semester': 4,
            'korean': 'A',
            'social': 'A',
            'history': 'B',
            'math': 'A',
            'science': 'A',
            'tech': 'A',
            'english': 'A'
        },
        {
            'semester': 5,
            'korean': 'A',
            'social': 'A',
            'history': 'B',
            'math': 'B',
            'science': 'A',
            'tech': 'A',
            'english': 'A'
        }
    ]
}

SAMPLE_GED_DETAIL_INFO = {
    'main': {
        'img_path': None,
        'name': '정경서',
        'admission': 'NORMAL',
        'region': '전국'
    },
    'basic': {
        'name': '정경서',
        'tel': '010-1234-5882',
        'address': '경기도 시흥시 이종현길 91'
    },
    'parent': {
        'name': '김우진',
        'tel': '010-1234-5687'
    },
    'academic': {
        'is_ged': True
    },
    'exam_code': None
}

SAMPLE_GED_DETAIL_GRADE = {
    'ged_grade': 100,
    'final_score': 165
}

SAMPLE_AMOUNT_STATISTIC = {
    'numberOfApplicants': {
        "daejeon": {
            "meister": 2,
            "social": 0,
            "normal": 3,
            "total": 5
        },
        "nationwide": {
            "meister": 1,
            "social": 2,
            "normal": 4,
            "total": 7
        },
        "total": 12
    },
    'competitionRate': {
        "daejeon": {
            "meister": "0.1 : 1",
            "social": "지원자 없음",
            "normal": "0.08 : 1",
            "total": "0.08 : 1"
        },
        "nationwide": {
            "meister": "0.04 : 1",
            "social": "0.25 : 1",
            "normal": "0.07 : 1",
            "total": "0.07 : 1"
        },
        "total": "0.07 : 1"
    },
    'onScore': {
        "daejeon": {
            "meister": {
                "150u": 0,
                "140u": 0,
                "130u": 0,
                "120u": 0,
                "110u": 0,
                "100u": 0,
                "90u": 2,
                "80u": 0,
                "70u": 0
            },
            "social": {
                "150u": 0,
                "140u": 0,
                "130u": 0,
                "120u": 0,
                "110u": 0,
                "100u": 0,
                "90u": 0,
                "80u": 0,
                "70u": 0
            },
            "normal": {
                "150u": 3,
                "140u": 0,
                "130u": 0,
                "120u": 0,
                "110u": 0,
                "100u": 0,
                "90u": 0,
                "80u": 0,
                "70u": 0
            }
        },
        "nationwide": {
            "meister": {
                "150u": 0,
                "140u": 0,
                "130u": 0,
                "120u": 0,
                "110u": 0,
                "100u": 0,
                "90u": 1,
                "80u": 0,
                "70u": 0
            },
            "social": {
                "150u": 2,
                "140u": 0,
                "130u": 0,
                "120u": 0,
                "110u": 0,
                "100u": 0,
                "90u": 0,
                "80u": 0,
                "70u": 0
            },
            "normal": {
                "150u": 3,
                "140u": 0,
                "130u": 0,
                "120u": 0,
                "110u": 0,
                "100u": 0,
                "90u": 0,
                "80u": 0,
                "70u": 1
            }
        }
    }
}
