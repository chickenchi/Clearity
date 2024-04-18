from models.account_db import AccountDB

class AccountService:
    def __init__(self):
        self.todo_db = AccountDB()

    def find_account(self, dto):
        if self.check_sql_injection(dto):
            print("SQL Injection 인식")
            return
        
        if self.todo_db.find_account(dto):
            return "Success"
        else:
            return "No Account"

    def register_account(self, dto):
        if self.check_sql_injection(dto):
            print("SQL Injection 인식")
            return
        
        check = self.todo_db.register_account(dto)

        print(check)
        
        if check == "Failed":
            return "계정(id) 혹은 이메일을 이미 다른 사용자가\n사용 중입니다."
        else:
            return "Success"

    def check_sql_injection(self, dto):
        dto = dto
        return False