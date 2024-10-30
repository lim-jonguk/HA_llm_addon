# addon_backend/api/routes.py

from flask import request, jsonify
from . import api_bp
from ..services import hass_service, ai_service

@api_bp.route('/devices', methods=['GET'])
def get_devices():
    """장치 목록을 반환합니다."""
    devices = hass_service.get_devices()
    return jsonify(devices), 200

@api_bp.route('/devices/<device_id>/commands', methods=['POST'])
def send_device_command(device_id):
    """특정 장치에 명령을 전송합니다."""
    data = request.get_json()
    command = data.get('command')
    if not command:
        return jsonify({'error': '명령이 제공되지 않았습니다.'}), 400

    success = hass_service.send_command(device_id, command)
    if success:
        return jsonify({'message': '명령이 성공적으로 전송되었습니다.'}), 200
    else:
        return jsonify({'error': '명령 전송에 실패했습니다.'}), 500

@api_bp.route('/models', methods=['GET'])
def get_models():
    """사용 가능한 LLM 모델 목록을 반환합니다."""
    models = ai_service.get_available_models()
    return jsonify(models), 200
