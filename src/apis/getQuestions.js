import { fetchGet } from './api';

const getQuestions = async ({ subjectId, limit = 8, offset = 0 }) => {
  const query = `?limit=${limit}&offset=${offset}`;

  const result = await fetchGet(`subjects/${subjectId}/questions/${query}`);
  return result;
};

export default getQuestions;
