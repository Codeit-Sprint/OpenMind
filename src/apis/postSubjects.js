import { DEFAULT_TEAM_PATH } from '../constants/constant';
import { fetchPost } from './api';

const postSubjects = async (name) => {
  const body = {
    team: DEFAULT_TEAM_PATH,
    name,
  };
  const result = await fetchPost('subjects/', body);
  return result;
};

export default postSubjects;
