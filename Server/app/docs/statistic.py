VIEW_AMOUNT_GET = {
    'tags': ['[Statistic]'],
    'description': '조건별 지원자 수 통계 조회 API',
    'parameters': [
        {
            'name': 'Authorization',
            'description': 'JWT Token',
            'in': 'header',
            'type': 'str',
            'required': True
        }
    ],
    'responses': {
        '200': {
            'description': '조회 성공',
            'examples': {
                '': {
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
            }
        }
    }
}
