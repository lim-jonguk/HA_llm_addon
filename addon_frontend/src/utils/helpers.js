// helpers.js

/**
 * 날짜를 지정된 형식으로 포맷팅하는 함수
 * @param {Date} date - 포맷팅할 날짜 객체
 * @param {string} format - 날짜 형식 (예: 'YYYY-MM-DD HH:mm:ss')
 * @returns {string} 포맷팅된 날짜 문자열
 */
export function formatDate(date, format = 'YYYY-MM-DD HH:mm:ss') {
    const padZero = (num) => (num < 10 ? `0${num}` : num);
    const YYYY = date.getFullYear();
    const MM = padZero(date.getMonth() + 1);
    const DD = padZero(date.getDate());
    const HH = padZero(date.getHours());
    const mm = padZero(date.getMinutes());
    const ss = padZero(date.getSeconds());
  
    return format
      .replace('YYYY', YYYY)
      .replace('MM', MM)
      .replace('DD', DD)
      .replace('HH', HH)
      .replace('mm', mm)
      .replace('ss', ss);
  }
  
  /**
   * 문자열의 첫 글자를 대문자로 변환하는 함수
   * @param {string} str - 변환할 문자열
   * @returns {string} 변환된 문자열
   */
  export function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  /**
   * API 요청 시 에러를 처리하는 함수
   * @param {Error} error - 발생한 에러 객체
   * @returns {string} 사용자에게 표시할 에러 메시지
   */
  export function handleApiError(error) {
    if (error.response) {
      // 서버가 응답을 반환한 경우
      return `서버 에러: ${error.response.status} ${error.response.statusText}`;
    } else if (error.request) {
      // 요청이 전송되었지만 응답이 없는 경우
      return '네트워크 에러: 서버로부터 응답이 없습니다.';
    } else {
      // 기타 에러
      return `에러: ${error.message}`;
    }
  }
  
  /**
   * 텍스트를 일정 길이로 자르고 말줄임표를 추가하는 함수
   * @param {string} text - 자를 텍스트
   * @param {number} maxLength - 최대 길이
   * @returns {string} 변환된 텍스트
   */
  export function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  }
  