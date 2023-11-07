import Badge from '../components/common/Badge/Badge';
import InputField from '../components/common/InputField/InputField';
import InputTextArea from '../components/common/InputTextArea/InputTextArea';
import { Dislike, Like } from '../components/common/Reaction/Reaction';
import Toast from '../components/common/Toast/Toast';

import UserCard from '../components/common/UserCard/UserCard';

const HomePage = () => {
  return (
    <>
      <p>sdfdsf</p>
      <InputField />
      <InputTextArea />
      <Badge />
      <UserCard />
      <Like />
      <Dislike />
      <Toast />
    </>
  );
};

export default HomePage;
