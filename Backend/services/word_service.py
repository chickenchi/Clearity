import random
from models.word_db import WordDB

class WordService:
    def __init__(self):
        self.word_db = WordDB()

    def find_word(self, regExp):
        words = [s[0] for s in self.word_db.find_word(regExp)]

        if len(words) == 0:
            return "no word"

        return words[random.randint(0, len(words)-1)]