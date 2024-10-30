## 폴더 구조
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

