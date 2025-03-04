from blueprintapp.app import db

class Person(db.Model):
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