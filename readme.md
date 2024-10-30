## 폴더 구조

## 프로젝트 설명

이 프로젝트는 홈어시스턴트와 LLM(대형 언어 모델)을 통합하여 스마트홈을 제어하는 데모 애드온입니다. Flask와 Flask-SocketIO를 사용하여 웹 애플리케이션과 실시간 통신을 구현합니다.

### 주요 구성 요소

- **백엔드**: Flask를 기반으로 한 API 서버로, 홈어시스턴트와 통신하여 장치 제어 및 상태 정보를 제공합니다.
  - `main.py`: Flask 애플리케이션을 초기화하고 실행합니다.
  - `api/__init__.py`: API 모듈을 초기화하고 필요한 모듈을 임포트합니다.
  - `api/websocket.py`: 웹소켓 이벤트를 처리합니다.
  - `api/routes.py`: HTTP API 라우트를 정의합니다.

- **프론트엔드**: React를 사용하여 사용자 인터페이스를 제공합니다.
  - `components/`: 장치 목록, 모델 선택기, 채팅 인터페이스 등의 컴포넌트를 포함합니다.
  - `services/`: 백엔드 API와 통신하기 위한 서비스 함수들을 정의합니다.

### 설치 및 실행

1. **백엔드 설정**:
   - 가상 환경을 생성하고 활성화합니다.
   - `requirements.txt` 파일을 사용하여 필요한 패키지를 설치합니다.
   - `main.py`를 실행하여 서버를 시작합니다.

2. **프론트엔드 설정**:
   - Node.js 환경에서 `npm install`을 실행하여 필요한 패키지를 설치합니다.
   - `npm run dev`를 실행하여 개발 서버를 시작합니다.

### 환경 변수 설정

- `.env` 파일을 사용하여 Flask 애플리케이션의 환경 변수를 설정할 수 있습니다. 예를 들어, `FLASK_APP`과 `FLASK_ENV` 변수를 설정하여 애플리케이션의 실행 환경을 지정할 수 있습니다.

### 참고 자료

- [Flask 공식 문서](https://flask.palletsprojects.com/en/2.1.x/cli/): Flask의 CLI 및 환경 변수 설정에 대한 자세한 정보를 제공합니다.

```
HA_LLM_addon/
├── addon_frontend/          # 프론트엔드 리액트 애플리케이션
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/     # 리액트 컴포넌트
│   │   │   ├── DeviceList/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   ├── ModelSelector/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styles.js
│   │   │   └── ChatInterface/
│   │   │       ├── index.jsx
│   │   │       └── styles.js
│   │   ├── hooks/         # 커스텀 훅
│   │   │   ├── useWebSocket.js
│   │   │   └── useDevices.js
│   │   ├── services/      # API 서비스
│   │   │   ├── api.js
│   │   │   └── websocket.js
│   │   ├── utils/         # 유틸리티 함수
│   │   │   └── helpers.js
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   └── vite.config.js     # Vite 설정
├── addon_backend/         # 백엔드 파이썬 애플리케이션
│   ├── api/
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   └── websocket.py
│   ├── services/
│   │   ├── __init__.py
│   │   ├── ai_service.py
│   │   └── hass_service.py
│   └── main.py
├── config.yaml           # 애드온 설정
├── Dockerfile           # 도커 빌드 설정
└── run.sh              # 시작 스크립트
```

