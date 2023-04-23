from core import app
from flask import Flask, jsonify, request, make_response
from flask_jwt_extended import JWTManager, create_access_token, jwt_required

app.config['JWT_SECRET_KEY'] = 'super-secret' # Replace with a secure key in production
jwt = JWTManager(app)

users = [{'username': 'john', 'password': 'password123'}]

@app.route('/api/register', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
    else:
        username = ""
        password = ""

    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400

    if any(user['username'] == username for user in users):
        return jsonify({'message': 'Username already exists'}), 400

    users.append({'username': username, 'password': password})
    return jsonify({'message': 'User registered successfully'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = next((user for user in users if user['username'] == username), None)
    if not user or user['password'] != password:
        return jsonify({'message': 'Invalid credentials'}), 401

    access_token = create_access_token(identity=user['username'])
    return jsonify({'access_token': access_token}), 200

@app.route('/api/protected')
@jwt_required()
def protected():
    return jsonify({'message': 'Protected endpoint'}), 200