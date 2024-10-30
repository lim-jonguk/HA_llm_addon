# addon_backend/api/__init__.py

from flask import Blueprint

# Blueprint 생성
api_bp = Blueprint('api', __name__)

# 모듈 임포트
from . import routes, websocket
