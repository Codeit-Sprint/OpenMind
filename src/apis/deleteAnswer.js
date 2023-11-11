import { fetchDelete } from './api';

// 답변 삭제
const deleteAnswer = async ({ answerId }) => {
  const result = await fetchDelete(`answers/${answerId}/`);
  return result;
};

export default deleteAnswer;
