# Stage 1: 프론트엔드 빌드
FROM node:16 as frontend_builder

WORKDIR /frontend

COPY addon_frontend/package.json addon_frontend/package-lock.json ./
RUN npm install

COPY addon_frontend/ ./
RUN npm run build

# Stage 2: 백엔드 설정 및 전체 애플리케이션 빌드
FROM python:3.9-slim

WORKDIR /app

# 필요한 시스템 패키지 설치
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libssl-dev \
    libffi-dev \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Python 종속성 설치
COPY addon_backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# 백엔드 소스 복사
COPY addon_backend/ ./

# 프론트엔드 빌드 결과물 복사
COPY --from=frontend_builder /frontend/dist ./static

# 실행 권한 부여 및 실행
COPY addon_backend/run.sh ./
RUN chmod +x run.sh

# 사용자 생성 및 권한 설정
RUN useradd -m appuser && chown -R appuser /app
USER appuser

# 포트 설정
EXPOSE 8080

# 애플리케이션 실행
CMD ["./run.sh"]
