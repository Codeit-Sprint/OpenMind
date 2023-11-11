import { fetchPut } from './api';

// 답변 변경
const putAnswer = async ({ answerId, content, isRejected = 'false' }) => {
  const body = {
    content,
    isRejected,
  };
  const result = await fetchPut(`answers/${answerId}/`, body);

  return result;
};

export default putAnswer;
