from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager

db = SQLAlchemy()

def create_app():
    app = Flask(__name__, template_folder='templates', static_folder='static', static_url_path='/')
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./blueprints.db'
    app.secret_key = 'secret'

    db.init_app(app)
    login_manager = LoginManager()
    login_manager.init_app(app)

    from blueprintapp.blueprints.people.models import Person
    @login_manager.user_loader
    def load_users(pid):
        return Person.query.get(pid)

    # import and register all blueprints
    from blueprintapp.blueprints.core.routes import core
    from blueprintapp.blueprints.todos.routes import todos
    from blueprintapp.blueprints.people.routes import people

    app.register_blueprint(core, url_prefix='/')
    app.register_blueprint(todos, url_prefix='/todos')
    app.register_blueprint(people, url_prefix='/people')

    migrate = Migrate(app, db)

    return app