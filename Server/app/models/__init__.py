from peewee import MySQLDatabase, Model

mysql_db = MySQLDatabase('peewee22', user='root', password='germany33',
                         host='localhost', port=3306)


# DB 연결을 설정하는 기본 모델 클래스 정의
# 다른 모델에서 이 기본모델을 상속 받음으로서, 차후 모델을 정의할 때 어느 데이터베이스의 모델인지 일일이 지정할 필요가 없음
class BaseModel(Model):
    class Meta:
        database = mysql_db
