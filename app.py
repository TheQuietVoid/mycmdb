from flask import Flask, render_template, request, session, redirect, url_for
from flask_cors import CORS
import os,yaml,json
from routes.main_routes import main_routes

app = Flask(__name__)
app.register_blueprint(main_routes)
app.secret_key = 'supersecretkey'
app_path=app.root_path
app.config["APP_ROOT"]=app_path
# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})

@app.route('/')
def root():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)