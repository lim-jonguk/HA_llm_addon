#!/usr/bin/with-contenv bashio

# # 설정 가져오기
# API_KEY=$(bashio::config 'api_key')

# # 환경변수 설정
# export AI_API_KEY="${API_KEY}"

# 백엔드 서버 시작
python HA_llm_addon/addon_backend/main.py