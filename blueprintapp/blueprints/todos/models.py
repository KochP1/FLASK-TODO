from blueprintapp.app import db
from sqlalchemy.orm import relationship
from sqlalchemy.orm import backref
from blueprintapp.blueprints.people.models import Person

class Topic(db.Model):
    __tablename__ = 'topic'
    topId = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    pid = db.Column(db.Integer, db.ForeignKey('people.pid', name='fk_topic_pid'), nullable=False)
    fk_topic_pid = relationship(Person, backref=backref("children_topic_pid", cascade="all,delete"))

    def __repr__(self):
        return f'<TOPIC {self.name}>'
    
    def get_id(self):
        return self.topId

class Todo(db.Model):
    __tablename__ = 'todos'

    tid = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String, nullable=False)
    done = db.Column(db.Boolean)
    topId = db.Column(db.Integer, db.ForeignKey('topic.topId', name='fk_todo_topid'), nullable=False)  # Nombre de la clave foránea
    fk_topid = relationship(Topic, backref=backref("children", cascade="all,delete"))

    def __repr__(self):
        return f'<TODO {self.description}, Done: {self.done}>'
    
    def get_id(self):
        return self.tid
    
class Task(db.Model):
    __tablename__ = 'tasks'

    taskId = db.Column(db.Integer, primary_key=True)
    tittle = db.Column(db.String, nullable=False)
    taskContent = db.Column(db.String, nullable=False)
    pid = db.Column(db.Integer, db.ForeignKey('people.pid', name='fk_task_pid'), nullable=False)  # Nombre de la clave foránea
    fk_task_pid = relationship(Person, backref=backref("children_task_pid", cascade="all,delete"))

    def __repr__(self):
        return f'<TASK {self.tittle}, CONTENT: {self.taskContent}>'
    
    def get_id(self):
        return self.taskId