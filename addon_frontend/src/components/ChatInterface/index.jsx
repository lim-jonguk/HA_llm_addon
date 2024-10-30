// components/ChatInterface/index.jsx

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ChatContainer,
  MessagesContainer,
  MessageItem,
  InputContainer,
  TextInput,
  SendButton,
} from './styles';

function ChatInterface({ messages, onSendMessage }) {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim() !== '') {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <ChatContainer>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <MessageItem key={index} sender={msg.sender}>
            <strong>{msg.sender === 'user' ? '사용자' : 'AI'}:</strong> {msg.content}
          </MessageItem>
        ))}
      </MessagesContainer>
      <InputContainer>
        <TextInput
          type="text"
          placeholder="메시지를 입력하세요..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <SendButton onClick={handleSend}>전송</SendButton>
      </InputContainer>
    </ChatContainer>
  );
}

ChatInterface.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSendMessage: PropTypes.func.isRequired,
};

export default ChatInterface;
