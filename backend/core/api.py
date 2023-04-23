from flask import request
from core import app
import requests 

@app.route('/api')
def proxy_api():
    url = 'http://localhost:3000/api' + request.full_path
    response = requests.get(url)
    return response.content, response.status_code