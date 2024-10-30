// components/DeviceList/styles.js

import styled from 'styled-components';

export const DeviceListContainer = styled.div`
  margin: 20px 0;
`;

export const DeviceItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

export const DeviceButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #1976d2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #115293;
  }
`;
