# addon_backend/services/hass_service.py

import os
import requests

HASS_API_URL = os.getenv('HASS_API_URL', 'http://supervisor/core/api')
HASS_API_TOKEN = os.getenv('SUPERVISOR_TOKEN')

headers = {
    'Authorization': f'Bearer {HASS_API_TOKEN}',
    'Content-Type': 'application/json',
}

def get_devices():
    """홈어시스턴트에서 장치 목록을 가져옵니다."""
    url = f'{HASS_API_URL}/states'
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        states = response.json()
        devices = []
        for state in states:
            # 필요한 정보만 추출
            if state['entity_id'].startswith('switch.') or state['entity_id'].startswith('light.'):
                devices.append({
                    'id': state['entity_id'],
                    'name': state['attributes'].get('friendly_name', state['entity_id']),
                })
        return devices
    else:
        return []

def send_command(device_id, command):
    """홈어시스턴트에 장치 제어 명령을 전송합니다."""
    if command not in ['turn_on', 'turn_off']:
        return False

    domain = device_id.split('.')[0]
    service = command
    url = f'{HASS_API_URL}/services/{domain}/{service}'
    data = {
        'entity_id': device_id
    }
    response = requests.post(url, headers=headers, json=data)
    return response.status_code == 200
