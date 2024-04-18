class AccountDTO:
    def __init__(self, id, pw, email):
        self._id = id
        self._pw = pw
        self._email = email

    @property
    def id(self):
        return self._id

    @property
    def pw(self):
        return self._pw
    
    @property
    def email(self):
        return self._email
