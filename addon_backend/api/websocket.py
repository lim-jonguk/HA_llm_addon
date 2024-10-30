# addon_backend/api/websocket.py

from flask import request
from flask_socketio import emit
from flask_socketio import SocketIO
from . import api_bp
from ..services import ai_service, hass_service

# Flask-SocketIO 초기화
socketio = SocketIO()

@socketio.on('connect')
def handle_connect():
    print('클라이언트가 연결되었습니다.')
    emit('message', {'sender': 'server', 'content': '웹소켓 연결이 성공했습니다.'})

@socketio.on('disconnect')
def handle_disconnect():
    print('클라이언트가 연결을 종료했습니다.')

@socketio.on('message')
def handle_message(data):
    """클라이언트로부터 메시지를 수신하고 처리합니다."""
    print('수신한 메시지:', data)
    model = data.get('model')
    content = data.get('content')
    if not model or not content:
        emit('error', {'error': '모델과 메시지를 제공해야 합니다.'})
        return

    # LLM에 메시지를 전달하고 응답 받기
    response = ai_service.get_response(model, content)
    # 응답을 클라이언트에 전송
    emit('message', {'sender': 'ai', 'content': response})
