import { fetchGet } from './api';

const getSubjects = async ({ limit = 8, sort = 'time', offset = 0 }) => {
  const query = `?limit=${limit}&offset=${offset}&sort=${sort}`;

  const result = await fetchGet(`subjects/${query}`);
  return result;
};

export default getSubjects;
