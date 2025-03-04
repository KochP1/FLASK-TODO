from blueprintapp.app import db

class Topic(db.Model):
    __tablename__ = 'topic'
    topId = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)

    def __repr__(self):
        return f'<TOPIC {self.name}>'
    
    def get_id(self):
        return self.topId

class Todo(db.Model):
    __tablename__ = 'todos'

    tid = db.Column(db.Integer, primary_key = True)
    description = db.Column(db.String, nullable = False)
    done = db.Column(db.Boolean, nullable=False)
    topId = db.Column(db.Integer,)

    def __repr__(self):
        return f'<TODO {self.title}, Done: {self.done}>'
    
    def get_id(self):
        return self.tid