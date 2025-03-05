from flask import request, render_template, redirect, url_for, Blueprint
from flask_login import current_user

from blueprintapp.app import db
from blueprintapp.blueprints.todos.models import Todo, Topic

todos = Blueprint('todos', __name__, template_folder='templates')


@todos.route('/')
def index():
    userId = current_user.pid
    topics = Topic.query.filter(Topic.pid == userId).all()
    topId = Topic.topId
    todos = Todo.query.filter(Todo.topId == topId).all()
    print(f'Hello , {topics}: {todos}')
    return render_template('todos/index.html', topics = topics, todos = todos)

@todos.route('/create_todo', methods = ['POST'])
def create_todo():
    description = request.form['description']
    topid = request.form['topid']

    todo = Todo(description = description, topId = topid)
    db.session.add(todo)
    db.session.commit()
    return redirect(url_for('todos.index'))

@todos.route('/delete_todo', methods = ['POST'])
def delete_todo():
    tid = request.form['tid']
    todo = Todo.query.filter(Todo.tid == tid).first()
    db.session.delete(todo)
    db.session.commit()
    return redirect(url_for('todos.index'))

@todos.route('/create_topic', methods = ['POST'])
def create_topic():
    name = request.form['name']
    pid = current_user.pid

    topic = Topic(name = name, pid = pid)

    db.session.add(topic)
    db.session.commit()
    return redirect(url_for('todos.index'))
