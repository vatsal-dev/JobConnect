from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from sqlalchemy_utils import EmailType, PasswordType, URLType
from flask_cors import CORS

app = Flask(__name__, static_folder="JobConnect_frontend/build")
app.debug = True

CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///database.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class ArticleSchema(ma.Schema):
    class Meta:
        fields = ('id' , 'title', 'body')

article_schema = ArticleSchema()
articles_schema = ArticleSchema(many=True)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name= db.Column(db.String(200), nullable=False)
    email= db.Column(EmailType, nullable=False)
    #password= db.Column(PasswordType, nullable=False)
    role= db.Column(db.String(50), nullable=False)

    def __repr__(self) -> str:
        return f"{self.name} - {self.role}"
    
class employer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_name= db.Column(db.String(200), nullable=False)
    email= db.Column(EmailType, nullable=False)
    #password= db.Column(PasswordType, nullable=False)
    website= db.Column(URLType)
    location= db.Column(db.String(200), nullable=False)
    number_emp= db.Column(db.String(200), nullable=False)
    experience= db.Column(db.Integer, primary_key=True)

class applicant(db.Model):
    cv= db.Column(db.String(200), nullable=False)
    country= db.Column(db.String(200), nullable=False)
    role= db.Column(db.String(200), nullable=False)
    about_me= db.Column(db.String(500), nullable=False)
    college= db.Column(db.String(200), nullable=False)
    grad= db.Column(db.Integer, primary_key=True)
    skills= db.Column(db.String(200), nullable=False)

class job(db.Model):
    title= db.Column(db.String(200), nullable=False, primary_key=True)
    category= db.Column(db.String(200), nullable=False)
    jobtype= db.Column(db.String(200), nullable=False)
    desc= db.Column(db.String(500), nullable=False)



from core import views, profile, token