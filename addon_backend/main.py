# addon_backend/main.py

from flask import Flask
from api import api_bp, websocket
from flask_socketio import SocketIO
from services import hass_service, ai_service

app = Flask(__name__)
app.register_blueprint(api_bp)

# SocketIO 초기화
socketio = websocket.socketio
socketio.init_app(app, cors_allowed_origins="*")

if __name__ == '__main__':
    # 앱 실행
    socketio.run(app, host='0.0.0.0', port=8080)
