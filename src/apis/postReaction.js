import { fetchPost } from './api';

const postReaction = async ({ questionId, type }) => {
  const body = {
    type,
  };
  const result = await fetchPost(`questions/${questionId}/reaction/`, body);
  return result;
};

export default postReaction;
