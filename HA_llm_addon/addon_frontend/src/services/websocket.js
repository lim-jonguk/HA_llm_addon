// services/websocket.js

/**
 * 웹소켓 연결을 관리하기 위한 모듈입니다.
 */

const createWebSocket = (onMessage, onError, onClose) => {
    // 웹소켓 URL 설정
    const wsProtocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const wsUrl = `${wsProtocol}://${window.location.host}/ws`;
  
    // 웹소켓 인스턴스 생성
    const socket = new WebSocket(wsUrl);
  
    // 이벤트 핸들러 설정
    socket.onopen = () => {
      console.log('WebSocket 연결이 열렸습니다.');
    };
  
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    };
  
    socket.onerror = (error) => {
      console.error('WebSocket 에러:', error);
      if (onError) onError(error);
    };
  
    socket.onclose = (event) => {
      console.log('WebSocket 연결이 닫혔습니다.', event);
      if (onClose) onClose(event);
    };
  
    // 메시지 전송 함수
    const sendMessage = (message) => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(message));
      } else {
        console.error('WebSocket 연결이 열려 있지 않습니다.');
      }
    };
  
    // 웹소켓 닫기 함수
    const closeSocket = () => {
      socket.close();
    };
  
    // 필요한 경우 재연결 로직을 추가할 수 있습니다.
  
    return {
      socket,
      sendMessage,
      closeSocket,
    };
  };
  
  export default createWebSocket;
  