export const setLocalStorageAnswer = ({
  questionId,
  answerId,
  isRejected = false,
}) => {
  const answerArr = JSON.parse(localStorage.getItem('answerArray'));
  const pushObject = {
    questionId,
    answerId,
    isRejected,
  };
  answerArr.push(pushObject);
  localStorage.setItem('answerArray', JSON.stringify(answerArr));
};
