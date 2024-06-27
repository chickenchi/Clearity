import pymysql

class WordDB:
    def setting(self):
        self.db = pymysql.connect(host='localhost', user='root', password='1234', db='clearity')
        self.cur = self.db.cursor()
        print("connect ok")

    def __init__(self):
        self.setting()
    
    def find_word(self, regExp):
        while True:
            try:
                sql = """
                    SELECT *
                    FROM Words
                    WHERE word LIKE '{0}'
                """.format(regExp)

                self.cur.execute(sql)
                result = self.cur.fetchall()
                return result
            except:
                return 'X'