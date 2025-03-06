from blueprintapp.app import db

class Topic(db.Model):
    __tablename__ = 'topic'
    topId = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    pid = db.Column(db.Integer, db.ForeignKey('people.pid', name='fk_topic_pid', ondelete='CASCADE', onupdate='CASCADE'), nullable=False)  # Nombre de la clave foránea

    def __repr__(self):
        return f'<TOPIC {self.name}>'
    
    def get_id(self):
        return self.topId

class Todo(db.Model):
    __tablename__ = 'todos'

    tid = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String, nullable=False)
    done = db.Column(db.Boolean)
    topId = db.Column(db.Integer, db.ForeignKey('topic.topId', name='fk_todo_topid', ondelete='CASCADE', onupdate='CASCADE'), nullable=False)  # Nombre de la clave foránea

    def __repr__(self):
        return f'<TODO {self.description}, Done: {self.done}>'
    
    def get_id(self):
        return self.tid