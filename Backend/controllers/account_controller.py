from flask import render_template, request, redirect, url_for, Blueprint
from services.account_service import AccountService
from dto.accountDTO import AccountDTO

account_blueprint = Blueprint('account', __name__)
account_service = AccountService()

@account_blueprint.route('/login', methods=["POST"])
def login():
    dto = AccountDTO(request.json['id'], request.json['pw'], "")
    return account_service.find_account(dto)

@account_blueprint.route('/register', methods=["POST"])
def register():
    dto = AccountDTO(request.json['id'], request.json['pw'], request.json['email'])
    return account_service.register_account(dto)