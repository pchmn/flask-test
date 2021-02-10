import random

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/test-js')
def randomInt():
    return str(random.randint(0, 150))
