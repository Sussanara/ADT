from flask import Flask, request, jsonify
from flask_migrate import Migrate
from models import db, Admin, User, Product

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['JSON_SORT_KEYS'] = False

db.init_app(app)
Migrate(app,db)

@app.route('/api/users', methods = ['GET','POST']) #Acá agregar método POST
def users_with_products():
    if request.method == 'GET':
        users = User.query.all()
        users = list(map(lambda user: user.serialize_with_products(), users))
        return jsonify(users),200


    if request.method == 'POST':
        data = request.get_json()

        product = Product()
        product.owner_id = data['owner_id']
        product.name = data['name']
        product.stock = data['stock']
        product.sold_stock = data['sold_stock']
        product.price = data['price']

        product.save()

        return jsonify(product.serialize()),200
        



if __name__ == '__main__':
    app.run()