from peewee import MySQLDatabase, Model, IntegerField

mysql_db = MySQLDatabase('entry3.0_admin', user='root', password='germany33',
                         host='localhost', port=3306)


# DB 연결을 설정하는 기본 모델 클래스 정의
# 다른 모델에서 이 기본모델을 상속 받음으로서, 차후 모델을 정의할 때 어느 데이터베이스의 모델인지 일일이 지정할 필요가 없음
class BaseModel(Model):
    class Meta:
        database = mysql_db


class EnumField(IntegerField):
    def __int__(self, choices, *args, **kwargs):
        self.to_db = {k: v for k, v in choices}
        self.from_db = {v: k for k, v in choices}
        super(IntegerField, self).__init__(*args, **kwargs)

    def db_value(self, value):
        return self.to_db[value]

    def python_value(self, value):
        return self.from_db[value]


ADMISSION_CHOICES = [
    ("NORMAL", 1),
    ("MEISTER", 2),
    ("SOCIAL", 3)
]

ADMISSION_DETAIL_CHOICE = [
    ("DEFAULT", 0),
    ("BENEFICIARY", 1),
    ("ONE_PARENT", 2),
    ("CHA_UPPER", 3),
    ("CHACHA_UPPER", 4),
    ("FROM_NORTH", 5),
    ("MULTI_CULTURE", 6),
    ("ETC", 7)
]
