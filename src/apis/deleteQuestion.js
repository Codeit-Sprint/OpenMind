import { fetchDelete } from './api';

// 질문 삭제
const deleteQuestion = async ({ questionId }) => {
  const result = await fetchDelete(`questions/${questionId}/`);
  return result;
};

export default deleteQuestion;
