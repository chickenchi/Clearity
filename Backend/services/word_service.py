from models.word_db import WordDB

class WordService:
    def __init__(self):
        self.word_db = WordDB()

    def find_word(self, regExp):
        self.word_db.find_word(regExp)