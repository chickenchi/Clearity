import pymysql

class AccountDB:
    def __init__(self):
        self.db = pymysql.connect(host='localhost', user='root', password='1234', db='clearity')
        self.cur = self.db.cursor()
        print("connect ok")
    
    def find_account(self, dto):
        sql = """
            SELECT *
            FROM Accounts
            WHERE id = '{0}' and pw = '{1}' or
                  email = '{0}' and pw = '{1}'
        """.format(dto.id, dto.pw)

        self.cur.execute(sql)
        result = self.cur.fetchall()
        return result
    
    def register_account(self, dto):
        try:
            sql = """
                INSERT INTO Accounts (id, pw, email) VALUES('{0}', '{1}', '{2}')
            """.format(dto.id, dto.pw, dto.email)

            self.cur.execute(sql)
            self.db.commit()
            result = self.cur.fetchall()
            return result
        except:
            return "Failed"