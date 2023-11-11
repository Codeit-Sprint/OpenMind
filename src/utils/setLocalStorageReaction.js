export const setLocalStorageReaction = ({ questionId, like, dislike }) => {
  const reactionArr = JSON.parse(localStorage.getItem('reactionArray'));
  const pushObject = {
    questionId,
    like,
    dislike,
  };
  reactionArr.push(pushObject);
  localStorage.setItem('reactionArray', JSON.stringify(reactionArr));
};
