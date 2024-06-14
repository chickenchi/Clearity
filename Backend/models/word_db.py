import pymysql

class WordDB:
    def __init__(self):
        self.db = pymysql.connect(host='localhost', user='root', password='1234', db='clearity')
        self.cur = self.db.cursor()
        print("connect ok")
    
    def find_word(self, regExp):
        sql = """
            SELECT *
            FROM Words
            WHERE word LIKE '{0}';
        """.format(regExp)

        self.cur.execute(sql)
        result = self.cur.fetchall()
        return result