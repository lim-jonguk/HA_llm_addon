// services/api.js

import axios from 'axios';

/**
 * 홈어시스턴트 백엔드와 통신하기 위한 API 함수들을 정의합니다.
 */

// Axios 기본 설정
const apiClient = axios.create({
  baseURL: '/api', // Vite의 프록시 설정에 따라 백엔드로 요청이 전달됩니다.
  headers: {
    'Content-Type': 'application/json',
  },
});

// 장치 목록을 가져오는 함수
export const getDeviceList = async () => {
  try {
    const response = await apiClient.get('/devices');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 특정 장치에 명령을 전송하는 함수
export const sendDeviceCommand = async (deviceId, command) => {
  try {
    const response = await apiClient.post(`/devices/${deviceId}/commands`, {
      command,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// LLM 모델 목록을 가져오는 함수
export const getModelList = async () => {
  try {
    const response = await apiClient.get('/models');
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 기타 필요한 API 함수들을 추가할 수 있습니다.
