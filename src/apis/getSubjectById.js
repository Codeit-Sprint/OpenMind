import { fetchGet } from './api';

const getSubjectById = (userId) => {
  return fetchGet(`subjects/${userId}/`);
};

export default getSubjectById;
