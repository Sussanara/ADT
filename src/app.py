from flask import Flask, request, jsonify
from flask_migrate import Migrate
from models import db,Admin, User, Product

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['JSON_SORT_KEYS'] = False

db.init_app(app)
Migrate(app,db)

@app.route('/api/admin', methods = ['GET'])
def admin_list():
    if request.method == 'GET':
        admins = Admin.query.all()
        admins = list(map(lambda admin: admin.serialize(),admins))
        return jsonify(admins)

#GET ALL USERS /// POST PRODUCT
@app.route('/api/users', methods = ['GET','POST'])
def users_with_products():
    if request.method == 'GET':
        users = User.query.all()
        users = list(map(lambda user: user.serialize_with_products(), users))
        return jsonify(users),200

    #PRODUCT CREATION
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

#GET USER BY ID
@app.route('/api/users/<int:id>', methods = ['GET'])
def get_user_by_id(id):
    user = User.query.get(id)
    return jsonify(user.serialize_with_products()),200

#GET PRODUCT BY ID , EDIT PRODUCT BY ID
@app.route('/api/users/<int:id>/products/<int:product_id>', methods = ['GET','PUT'])
def get_product_by_id(id,product_id):
    if request.method == 'GET':
        product = Product.query.get(product_id)
        return jsonify(product.serialize()),200
    
    if request.method == 'PUT':
        new_name = request.json.get('name')
        new_stock = request.json.get('stock')
        new_sold_stock = request.json.get('sold_stock')
        new_price = request.json.get('price')

        product = Product.query.get(product_id)

        product.name = new_name
        product.stock = new_stock
        product.sold_stock = new_sold_stock
        product.price = new_price

        product.update()
        user = User.query.get(id)

        return jsonify(user.serialize_with_products()),200




if __name__ == '__main__':
    app.run()