import React, { useState } from 'react';
import DeviceList from './components/DeviceList';
import ModelSelector from './components/ModelSelector';
import ChatInterface from './components/ChatInterface';
import useDevices from './hooks/useDevices';
import useWebSocket from './hooks/useWebSocket';

function App() {
  // 선택된 모델을 관리하는 상태
  const [selectedModel, setSelectedModel] = useState('gpt-3.5-turbo');

  // 채팅 메시지를 관리하는 상태
  const [messages, setMessages] = useState([]);

  // 커스텀 훅을 사용하여 장치 목록 가져오기
  const devices = useDevices();

  // 웹소켓 연결 설정
  const socket = useWebSocket((event) => {
    const data = JSON.parse(event.data);
    // 서버로부터 받은 메시지를 상태에 추가
    setMessages((prevMessages) => [...prevMessages, data]);
  });

  // 모델 변경 시 호출되는 핸들러
  const handleModelChange = (model) => {
    setSelectedModel(model);
  };

  // 메시지 전송 시 호출되는 핸들러
  const handleSendMessage = (message) => {
    // 서버로 메시지 전송
    socket.send(
      JSON.stringify({
        type: 'message',
        model: selectedModel,
        content: message,
      })
    );
    // 사용자의 메시지를 상태에 추가
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'user', content: message },
    ]);
  };

  return (
    <div>
      <h1>AI Smart Home Control</h1>
      {/* 모델 선택 컴포넌트 */}
      <ModelSelector
        selectedModel={selectedModel}
        onModelChange={handleModelChange}
      />

      {/* 장치 목록 컴포넌트 */}
      <DeviceList devices={devices} />

      {/* 채팅 인터페이스 컴포넌트 */}
      <ChatInterface
        messages={messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default App;
