from flask import Blueprint, render_template, session,abort

main_routes=Blueprint('main_routes',__name__)
@main_routes.route('/login')
def login():
    return "login.html"