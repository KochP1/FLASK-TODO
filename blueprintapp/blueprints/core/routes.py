from flask import request, render_template, redirect, url_for, Blueprint
core = Blueprint('core', __name__, template_folder='templates')


@core.route('/')
def index():
    return render_template('core/index.html')