import { fetchGet } from './api';

// 질문 조회
const getQuestionById = async ({ questionId }) => {
  const result = await fetchGet(`questions/${questionId}/`);
  return result;
};

export default getQuestionById;
