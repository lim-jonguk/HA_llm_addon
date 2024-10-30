// components/ChatInterface/styles.js

import styled from 'styled-components';

export const ChatContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  max-width: 600px;
  margin: 20px 0;
`;

export const MessagesContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
`;

export const MessageItem = styled.div`
  margin: 5px 0;
  text-align: ${(props) => (props.sender === 'user' ? 'right' : 'left')};
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const TextInput = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 16px;
`;

export const SendButton = styled.button`
  padding: 8px 16px;
  background-color: #1976d2;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #115293;
  }
`;
