from flask import request, render_template, redirect, url_for, Blueprint
from flask_login import login_user, logout_user, current_user
from blueprintapp.app import db
from blueprintapp.blueprints.people.models import Person
from flask_bcrypt import Bcrypt, generate_password_hash

people = Blueprint('people', __name__, template_folder='templates', static_folder="static")
bcrypt = Bcrypt()

@people.route('/', methods =['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('people/index.html')
    elif request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        user = Person.query.filter_by(email = email).first()
        if bcrypt.check_password_hash(user.password, password):
            login_user(user)
            return redirect(url_for('todos.index'))
        else: 
            return render_template('people/index.html', message='Credenciales invalidas')

@people.route('/create', methods = ['GET', 'POST'])
def create():
    if request.method == 'GET':
        return render_template('people/create.html')
    elif request.method == 'POST':
        email = request.form['email']
        password = request.form['password']
        name = request.form['name']
        lastName = request.form['lastName']
        hash_password = bcrypt.generate_password_hash(password).decode('utf-8')

        people = Person(email = email, password = hash_password, name = name, lastName = lastName)

        db.session.add(people)
        db.session.commit()

        return redirect(url_for('people.index'))

@people.route('logout')
def logout():
    logout_user()
    return redirect(url_for('people.index'))
