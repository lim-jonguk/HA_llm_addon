// components/DeviceList/index.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { DeviceListContainer, DeviceItem, DeviceButton } from './styles';

function DeviceList({ devices, onCommand }) {
  return (
    <DeviceListContainer>
      <h2>장치 목록</h2>
      {devices.length === 0 ? (
        <p>장치가 없습니다.</p>
      ) : (
        <ul>
          {devices.map((device) => (
            <DeviceItem key={device.id}>
              <span>{device.name}</span>
              <div>
                <DeviceButton onClick={() => onCommand(device.id, 'turn_on')}>
                  켜기
                </DeviceButton>
                <DeviceButton onClick={() => onCommand(device.id, 'turn_off')}>
                  끄기
                </DeviceButton>
              </div>
            </DeviceItem>
          ))}
        </ul>
      )}
    </DeviceListContainer>
  );
}

DeviceList.propTypes = {
  devices: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onCommand: PropTypes.func.isRequired,
};

export default DeviceList;
