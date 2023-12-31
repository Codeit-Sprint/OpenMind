export const deleteLocalStorageReaction = ({ questionId }) => {
  const reactionArr = JSON.parse(localStorage.getItem('reactionArray'));
  const newArr = reactionArr.filter((item) => item.questionId !== questionId);

  localStorage.setItem('reactionArray', JSON.stringify(newArr));
};
