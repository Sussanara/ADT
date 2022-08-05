from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey

db = SQLAlchemy()

class Admin(db.Model):
    __tablename__ = 'admin'
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(200), nullable = False , unique = True )
    password = db.Column(db.String(200), nullable = False)

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(200), nullable = False, unique = True)
    password = db.Column(db.String(200) , nullable = False)
    email = db.Column(db.String(200), nullable = False , unique = True)
    company_name = db.Column(db.String(200))
    phone = db.Column(db.String(200))
    firstName = db.Column(db.String(200))
    lastName = db.Column(db.String(200))
    rut  = db.Column(db.String(200), nullable = False , unique = True)
    products = db.relationship('Product', backref='user')

class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key = True)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    name = db.Column(db.String(200))
    stock  = db.Column(db.Integer, nullable = False)
    sold_stock = db.Column(db.Integer, nullable = False)
    price = db.Column(db.Integer, nullable = False)


