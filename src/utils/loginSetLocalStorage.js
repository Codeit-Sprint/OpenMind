const loginSetLocalStorage = ({ data }) => {
  const { name, imageSource, id } = data;

  localStorage.setItem('userName', name);
  localStorage.setItem('imageSource', imageSource);
  localStorage.setItem('userId', id);
  localStorage.setItem('answerArray', JSON.stringify([]));
  localStorage.setItem('reactionArray', JSON.stringify([]));
};

export default loginSetLocalStorage;
