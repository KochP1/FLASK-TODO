from flask import request, render_template, redirect, url_for, Blueprint
from flask_login import current_user

from blueprintapp.app import db
from blueprintapp.blueprints.todos.models import Todo, Topic

todos = Blueprint('todos', __name__, template_folder='templates')


@todos.route('/')
def index():
    userId = current_user.pid
    topics = Topic.query.filter(Topic.pid == userId).all()
    return render_template('todos/index.html', topics = topics)

@todos.route('/create', methods = ['GET', 'POST'])
def create():
    if request.method == 'GET':
        return render_template('todos/create.html')
    elif request.method == 'POST':
        return ''
