from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from config import Config


app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
ma = Marshmallow(app)


from app.api import bp as api_bp
app.register_blueprint(api_bp, url_prefix='/api')


@app.before_first_request
def create_db():
    db.create_all()


if __name__ == '__main__':
    app.run(port=5000, debug=True)