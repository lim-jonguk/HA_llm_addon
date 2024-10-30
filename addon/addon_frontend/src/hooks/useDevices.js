// hooks/useDevices.js

import { useState, useEffect } from 'react';
import { getDeviceList } from '../services/api';
import { handleApiError } from '../utils/helpers';

/**
 * 장치 목록을 관리하는 커스텀 훅
 * @returns {array} 장치 목록과 로딩 상태, 에러 메시지
 */
function useDevices() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // 장치 목록 가져오기
    const fetchDevices = async () => {
      try {
        const data = await getDeviceList();
        setDevices(data);
      } catch (err) {
        const errorMessage = handleApiError(err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  return { devices, loading, error };
}

export default useDevices;
