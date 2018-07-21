from datetime import datetime

from app.models import db


class UserModel(db.Model):
    __tablename__ = 'User'

    user_id = db.Column(db.String(32), primary_key=True)
    email = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    create_at = db.Column(db.DateTime, default=datetime.now)
