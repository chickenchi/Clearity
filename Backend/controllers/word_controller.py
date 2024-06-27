from flask import jsonify, render_template, request, redirect, url_for, Blueprint
from services.word_service import WordService

word_blueprint = Blueprint('word', __name__)
word_service = WordService()

@word_blueprint.route('/find_word', methods=["POST"])
def find_word():
    regExp = request.json['regExp']
    return jsonify(word_service.find_word(regExp))