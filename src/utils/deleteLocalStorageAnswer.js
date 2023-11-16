// questionId에 해당하는 객체들 제거
export const deleteLocalStorageAnswer = ({ questionId }) => {
  const answerArr = JSON.parse(localStorage.getItem('answerArray'));
  const newArr = answerArr.filter((answer) => answer.questionId !== questionId);
  localStorage.setItem('answerArray', JSON.stringify(newArr));
};
