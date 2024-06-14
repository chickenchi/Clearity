from flask import render_template, request, redirect, url_for, Blueprint
from services.word_service import WordService

word_blueprint = Blueprint('word', __name__)
word_service = WordService()

@word_blueprint.route('/find_word', methods=["POST"])
def find_word():
    regExp = request.json['regExp']
    return word_service.find_word(regExp)