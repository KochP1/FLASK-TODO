from flask import request, render_template, redirect, url_for, Blueprint, jsonify
from flask_login import current_user

from blueprintapp.app import db
from blueprintapp.blueprints.todos.models import Todo, Topic, Task

todos = Blueprint('todos', __name__, template_folder='templates')


@todos.route('/')
def index():
    userId = current_user.pid

    topics = Topic.query.filter(Topic.pid == userId).all()
    topId = Topic.topId

    todos = Todo.query.filter(Todo.topId == topId).all()

    tasks = Task.query.filter(Task.pid == userId).all()
    return render_template('todos/index.html', topics = topics, todos = todos, tasks = tasks)

@todos.route('/create_todo', methods = ['POST'])
def create_todo():
    description = request.form['description']
    topid = request.form['topid']

    todo = Todo(description = description, topId = topid)
    db.session.add(todo)
    db.session.commit()
    return redirect(url_for('todos.index'))

@todos.route('/update_todo/<int:tid>', methods = ['PATCH'])
def update_todo(tid):
    # Obtener el todo a modificar
    todo = Todo.query.filter(Todo.tid == tid).first()

    if not todo:
        return jsonify({"error": "El todo no existe."}), 404

    # Obtener los datos enviados en la solicitud
    data = request.get_json()

    # Actualizar el campo 'description' si está presente en los datos
    if 'description' in data:
        todo.description = data['description']

    # Guardar los cambios en la base de datos
    db.session.commit()

    return jsonify({"message": "Todo actualizado correctamente.", "todo": {"tid": todo.tid, "description": todo.description}}), 200


@todos.route('/toggle_done/<int:tid>', methods=['PATCH'])
def toggle_done(tid):
    # Obtener el todo a modificar
    todo = Todo.query.filter(Todo.tid == tid).first()

    if not todo:
        return jsonify({"error": "El todo no existe."}), 404

    # Obtener los datos enviados en la solicitud
    data = request.get_json()

    # Actualizar el campo 'done' si está presente en los datos
    if 'done' in data:
        todo.done = data['done']

    # Guardar los cambios en la base de datos
    db.session.commit()

    return jsonify({"message": "Estado 'done' actualizado correctamente.", "todo": {"tid": todo.tid, "done": todo.done}}), 200

@todos.route('/delete_todo/<int:tid>', methods = ['DELETE'])
def delete_todo(tid):
    todo = Todo.query.filter(Todo.tid == tid).first()

    if todo:
        db.session.delete(todo)
        db.session.commit()
        return jsonify({"message": "Item eliminado correctamente."}), 200
    else:
        return jsonify({"error": "El item no existe."}), 404

@todos.route('/create_topic', methods = ['POST'])
def create_topic():
    name = request.form['name']
    pid = current_user.pid

    topic = Topic(name = name, pid = pid)

    db.session.add(topic)
    db.session.commit()
    return redirect(url_for('todos.index'))

@todos.route('/update_topic/<int:topid>', methods = ['PATCH'])
def update_topic(topid):
    topic = Topic.query.filter(Topic.topId == topid).first()

    if topic:
        data = request.get_json()

    # Actualizar el campo 'description' si está presente en los datos
    if 'name' in data:
        topic.name = data['name']

    # Guardar los cambios en la base de datos
    db.session.commit()

    return jsonify({"message": "Topic actualizado correctamente.", "todo": {"tid": topic.topId, "nombre": topic.name}}), 200
    
@todos.route('/del_top/<int:topId>', methods = ['DELETE'])
def del_top(topId):
    topic = Topic.query.filter(Topic.topId == topId).first()

    if topic:
        db.session.delete(topic)
        db.session.commit()
        return jsonify({"message": "Tema eliminado correctamente."}), 200
    else:
        return jsonify({"error": "El tema no existe."}), 404
