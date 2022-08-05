from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey

db = SQLAlchemy()

class Admin(db.Model):
    __tablename__ = 'admin'
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(200), nullable = False , unique = True )
    password = db.Column(db.String(200), nullable = False)

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(200), nullable = False , unique = True)
    password = db.Column(db.String(200) , nullable = False)
    empresa = db.Column(db.String(200), nullable = False , unique = True)
    phone = db.Column(db.String(200), nullable = False)
    firstName = db.Column(db.String(200), nullable = False)
    lastName = db.Column(db.String(200), nullable = False)
    run  = db.Column(db.String(200), nullable = False , unique = True)
    is_active = db.Column(db.Boolean, nullable = False, default=True)
    products = db.relationship('Product', backref='user')

    def serialize_with_products(self):
        return{
            "id" : self.id,
            "email" : self.email,
            "password" : self.password,
            "empresa" : self.empresa,
            "phone" : self.phone,
            "firstName" : self.firstName,
            "lastName" : self.lastName,
            "run" : self.run,
            "is_active": self.is_active,
            "products": self.get_products()
        }
    
    def get_products(self):
        return list(map(lambda product: 
        {
            "id": product.id,
            "name": product.name, 
            "stock": product.stock, 
            "sold_stock": product.sold_stock,
            "price": product.price
        },self.products))

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key = True)
    owner_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    name = db.Column(db.String(200), nullable = False)
    stock  = db.Column(db.Integer, nullable = False)
    sold_stock = db.Column(db.Integer, nullable = False)
    price = db.Column(db.Integer, nullable = False)

    def serialize(self):
        return{
            "id" : self.id,
            "owner_id" : self.owner_id,
            "name" : self.name,
            "stock" : self.stock,
            "sold_stock" : self.sold_stock,
            "price" : self.price
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update(self):
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()


