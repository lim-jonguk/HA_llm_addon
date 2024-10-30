# addon_backend/services/ai_service.py

import os
import requests

API_KEY = os.getenv('API_KEY')  # 애드온 설정에서 가져옴

def get_available_models():
    """사용 가능한 LLM 모델 목록을 반환합니다."""
    # 실제로는 API를 호출하거나 설정에서 가져옵니다.
    return ['gpt-3.5-turbo', 'gpt-4', 'gemini']

def get_response(model, prompt):
    """LLM 모델을 호출하여 응답을 받습니다."""
    # 예시로 OpenAI API를 사용합니다.
    api_url = 'https://api.openai.com/v1/chat/completions'
    headers = {
        'Authorization': f'Bearer {API_KEY}',
        'Content-Type': 'application/json',
    }
    data = {
        'model': model,
        'messages': [{'role': 'user', 'content': prompt}],
        'max_tokens': 150,
    }
    response = requests.post(api_url, headers=headers, json=data)
    if response.status_code == 200:
        result = response.json()
        return result['choices'][0]['message']['content']
    else:
        return '죄송합니다. 응답을 가져올 수 없습니다.'
