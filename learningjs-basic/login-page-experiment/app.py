from flask import Flask, render_template, request, session, redirect, url_for
from flask_session import Session

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret-key'
app.config['SESSION_TYPE'] = 'filesystem'
Session(app)

users = {'username': 'password'}


@app.route('/')
def index():
    return 'Hello, world!'


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        username = data['username']
        password = data['password']
        if username in users and users[username] == password:
            session['username'] = username
            return 'Login successful'
        else:
            return {'message': 'Invalid username or password'}, 401
    else:
        return render_template('login.html')


if __name__ == '__main__':
    app.run()
