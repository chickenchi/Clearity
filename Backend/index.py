from flask import Flask
from flask_cors import CORS
from controllers.account_controller import account_blueprint

app = Flask(__name__)
CORS(app)

app.register_blueprint(account_blueprint)

if __name__ == '__main__':
    app.run(debug = True)