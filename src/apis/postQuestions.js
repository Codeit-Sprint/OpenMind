import { DEFAULT_TEAM_PATH } from '../constants/constant';
import { fetchPost } from './api';

let DEFAULT_VALUE = {
  like: 0,
  dislike: 0,
  answer: {
    content: 'string',
    isRejected: true,
  },
};

const postQuestions = async (subjectId, content) => {
  const body = {
    team: DEFAULT_TEAM_PATH,
    subjectId,
    content,
    ...DEFAULT_VALUE,
  };

  const result = await fetchPost(`subjects/${subjectId}/questions/`, body);
  return result;
};

export default postQuestions;
