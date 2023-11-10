import { fetchGet } from './api';

const getSubjectById = ({ subjectId }) => {
  return fetchGet(`subjects/${subjectId}/`);
};

export default getSubjectById;
