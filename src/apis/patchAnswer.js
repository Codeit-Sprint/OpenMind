import { fetchPatch } from './api';

// 답변 변경
const patchAnswer = async ({ answerId, isRejected = 'false' }) => {
  console.log(answerId);
  const body = {
    isRejected,
  };
  const result = await fetchPatch(`answers/${answerId}/`, body);

  return result;
};

export default patchAnswer;
