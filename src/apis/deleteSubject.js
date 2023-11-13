import { fetchDelete } from './api';

// 질문 대상 삭제
const deleteSubject = async ({ subjectId }) => {
  const result = await fetchDelete(`subjects/${subjectId}/`);
  return result;
};

export default deleteSubject;
