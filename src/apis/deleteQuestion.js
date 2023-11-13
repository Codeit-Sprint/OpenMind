import { fetchDelete } from './api';

// 질문 삭제
const deleteQuestion = async (questionId) => {
  const result = await fetchDelete(`questions/${String(questionId)}/`);
  console.log(result);
  return result;
};

export default deleteQuestion;
