import { fetchGet } from './api';

const getSubjectId = (subjectId) => {
  return fetchGet(`subjects/${subjectId}/`);
};

export default getSubjectId;
