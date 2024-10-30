// hooks/useWebSocket.js

import { useEffect, useRef } from 'react';
import createWebSocket from '../services/websocket';

/**
 * 웹소켓 연결을 관리하는 커스텀 훅
 * @param {function} onMessage - 메시지 수신 시 호출되는 콜백 함수
 * @returns {object} 웹소켓 인스턴스와 메시지 전송 함수
 */
function useWebSocket(onMessage) {
  const wsRef = useRef(null);

  useEffect(() => {
    // 웹소켓 생성
    const { socket, sendMessage, closeSocket } = createWebSocket(onMessage);

    // 웹소켓 인스턴스를 참조에 저장
    wsRef.current = {
      socket,
      sendMessage,
      closeSocket,
    };

    // 컴포넌트 언마운트 시 웹소켓 연결 닫기
    return () => {
      closeSocket();
    };
  }, [onMessage]);

  // 웹소켓 인스턴스와 메시지 전송 함수를 반환
  return wsRef.current;
}

export default useWebSocket;
