import { DEFAULT_TEAM_PATH } from '../constants/constant';
import { fetchPost } from './api';

const postAnswers = async (
  questionId,
  content,
  createdAt,
  isRejected = false,
) => {
  const body = {
    team: DEFAULT_TEAM_PATH,
    isRejected: isRejected,
    questionId: Number(questionId),
    createdAt: createdAt,
    content: content,
  };
  console.log('postAnswers', body);

  const result = await fetchPost(`questions/${questionId}/answers/`, body);
  return result;
};

export default postAnswers;
