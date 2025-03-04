from blueprintapp.app import db
from flask_login import UserMixin

class Person(db.Model, UserMixin):
    __tablename__ = 'people'

    pid = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String, nullable = False)
    password = db.Column(db.String, nullable = False)
    name = db.Column(db.String, nullable = False)
    lastName = db.Column(db.String, nullable = False)

    def __repr__(self):
        return f'<PERSON {self.name} {self.lastName}>'
    
    def get_id(self):
        return self.pid
    
    def get_email(self):
        return self.email