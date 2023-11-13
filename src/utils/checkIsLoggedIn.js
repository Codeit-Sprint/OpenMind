const checkIsLoggedIn = () => {
  if (localStorage.getItem('userId')) return true;
  return false;
};

export default checkIsLoggedIn;
