from functools import wraps
import time
import ujson

from flask import Response, abort, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_restful import Resource

from app.models import db
from app.models.admin_models import AdminModel
from app.models.user_models import *
from app.models.graduate_models import *
from app.models.ged_models import *


def after_request(response):
    """
    Set header - X-Content-Type-Options=nosniff, X-Frame-Options=deny before response
    """
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'deny'

    return response


def check_auth():
    """
    Check about auth
    - jwt token check
    - whether account is in model
    """
    def decorator(original_func):
        @wraps(original_func)
        @jwt_required
        def wrapper(*args, **kwargs):
            if not AdminModel.query.filter_by(admin_id=get_jwt_identity()).first():
                abort(401)
            return original_func(*args, **kwargs)
        return wrapper
    return decorator


def check_json(essential_keys):
    """
    Check about essential json data
    - whether data is json
    - whether equal type
    """
    def decorator(original_func):
        @wraps(original_func)
        def wrapper(*args, **kwargs):
            if not request.is_json:
                abort(406)

            for k, t in essential_keys.items():
                if k not in request.json or type(request.json[k]) is not t:
                    print(k)
                    abort(400)

            return original_func(*args, **kwargs)
        return wrapper
    return decorator


class BaseResource(Resource):
    def __init__(self):
        self.now = time.strftime('%Y-%m-%d %H:%M:%S')

    @classmethod
    def unicode_safe_json_dumps(cls, data, status_code=200, **kwargs) -> Response:
        return Response(
            ujson.dumps(data, ensure_ascii=False),
            status_code,
            content_type='application/json; charset=utf8',
            **kwargs
        )

    @classmethod
    def str_to_bool(cls, val):
        if val == 'false':
            val = None
        return bool(val)

    class ValidationError(Exception):
        def __init__(self, description='', *args):
            self.description = description

            super(BaseResource.ValidationError, self).__init__(*args)


class Router:
    def __init__(self, app=None):
        if app is not None:
            self.init_app(app)

    def init_app(self, app):
        app.after_request(after_request)

        from app.views import auth, search
        app.register_blueprint(auth.api.blueprint)
        app.register_blueprint(search.api.blueprint)


def create_csv_row(user_id):
    basic_data = db.session.query(UserModel, ApplyStatusModel, DocumentModel, InfoModel, GraduateInfoModel)\
        .join(ApplyStatusModel).join(DocumentModel)\
        .join(InfoModel).join(GraduateInfoModel).filter(UserModel.user_id == user_id).first()

    if str(basic_data.UserModel.graduate_type.name) == 'GED':
        ged = GedScoreModel.query.filter_by(user_id=user_id).first()
        grade_score = {
            '1학년': '',
            '2학년': '',
            '3학년': '',
            '교과성적환산점수': ged.conversion_score,
            '봉사시간': '',
            '봉사점수': ged.volunteer_score,
            '결석': '',
            '지각': '',
            '조퇴': '',
            '결과': '',
            '출석점수': ged.attendance_score,
            '1차전형 총점': ged.final_score
        }
    else:
        graduate = GraduateScoreModel.query.filter_by(user_id=user_id).first()
        grade_score = {
            '1학년': graduate.first_grade,
            '2학년': graduate.second_grade,
            '3학년': graduate.third_grade,
            '교과성적환산점수': graduate.conversion_score,
            '봉사시간': graduate.volunteer_time,
            '봉사점수': graduate.volunteer_score,
            '결석': graduate.full_cut,
            '지각': graduate.late,
            '조퇴': graduate.early_leave,
            '결과': graduate.period_cut,
            '출석점수': graduate.attendance_score,
            '1차전형 총점': graduate.final_score
        }

    grade_data = [{
        'semester': grade.semester,
        'korean': grade.korean,
        'social': grade.social,
        'history': grade.history,
        'math': grade.math,
        'science': grade.science,
        'tech': grade.tech,
        'english': grade.english
    } for grade in GraduateGradeModel.query.filter_by(user_id=user_id).all()]

    column = {
        '접수번호': basic_data.ApplyStatusModel.receipt_code,
        '전형유형': basic_data.UserModel.admission.name,
        '지역': basic_data.UserModel.region,
        '세부유형': basic_data.UserModel.admission_detail.name,
        '성명': basic_data.InfoModel.name,
        '생년월일': str(basic_data.InfoModel.birth),
        '주소': str(basic_data.InfoModel.address_base) + ' ' + str(basic_data.InfoModel.address_detail),
        '휴대폰 번호': basic_data.InfoModel.my_tel,
        '성별': basic_data.InfoModel.sex.name,
        '학력구분': basic_data.UserModel.graduate_type.name,
        '졸업년도': basic_data.GraduateInfoModel.graduate_year,
        '출신학교': basic_data.GraduateInfoModel.school_name,
        '반': basic_data.GraduateInfoModel.student_class,
        '보호자 성명': basic_data.InfoModel.parent_name,
        '보호자 연락처': basic_data.InfoModel.parent_tel,

        '국어1': grade_data[0]['korean'],
        '사회1': grade_data[0]['social'],
        '역사1': grade_data[0]['history'],
        '수학1': grade_data[0]['math'],
        '과학1': grade_data[0]['science'],
        '기술가정1': grade_data[0]['tech'],
        '영어1': grade_data[0]['english'],

        '국어2': grade_data[1]['korean'],
        '사회2': grade_data[1]['social'],
        '역사2': grade_data[1]['history'],
        '수학2': grade_data[1]['math'],
        '과학2': grade_data[1]['science'],
        '기술가정2': grade_data[1]['tech'],
        '영어2': grade_data[1]['english'],

        '국어3': grade_data[2]['korean'],
        '사회3': grade_data[2]['social'],
        '역사3': grade_data[2]['history'],
        '수학3': grade_data[2]['math'],
        '과학3': grade_data[2]['science'],
        '기술가정3': grade_data[2]['tech'],
        '영어3': grade_data[2]['english'],

        '국어4': grade_data[3]['korean'],
        '사회4': grade_data[3]['social'],
        '역사4': grade_data[3]['history'],
        '수학4': grade_data[3]['math'],
        '과학4': grade_data[3]['science'],
        '기술가정4': grade_data[3]['tech'],
        '영어4': grade_data[3]['english'],

        '국어5': grade_data[4]['korean'],
        '사회5': grade_data[4]['social'],
        '역사5': grade_data[4]['history'],
        '수학5': grade_data[4]['math'],
        '과학5': grade_data[4]['science'],
        '기술가정5': grade_data[4]['tech'],
        '영어5': grade_data[4]['english'],

        '국어6': grade_data[5]['korean'],
        '사회6': grade_data[5]['social'],
        '역사6': grade_data[5]['history'],
        '수학6': grade_data[5]['math'],
        '과학6': grade_data[5]['science'],
        '기술가정6': grade_data[5]['tech'],
        '영어6': grade_data[5]['english'],

        '자기소개서': basic_data.DocumentModel.introduce,
        '학업계획서': basic_data.DocumentModel.study_plan
    }

    column.update(grade_score)

    return column
