from flask import Blueprint, render_template, session,abort, current_app,request

main_routes=Blueprint('main_routes',__name__)
@main_routes.route('/login')
def login():
    return "login.html"
@main_routes.route('/signin',methods=['POST'])
def signin():
    app_path=current_app.config["APP_ROOT"]
    user=request.json['user']
    pwd=request.json['pwd']
    jsonres={}
    if user == "admin" and pwd == "admin":
        jsonres = {"token": "token","session_id": "session_id","role": "admin"}
    else:
        jsonres = {"token": "no","session_id": "no","role": "no"}

    return jsonres