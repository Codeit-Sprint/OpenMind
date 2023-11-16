import { Link, useNavigate } from 'react-router-dom';

import IMAGES from '../../assets';
import Button from '../../components/common/Button/Button';
import * as S from './QuestionListPage.styles';
import checkIsLoggedIn from '../../utils/checkIsLoggedIn';
import { useState } from 'react';
import Toast from '../../components/common/Toast/Toast';

const Navbar = () => {
  const navigate = useNavigate();
  let userId = localStorage.getItem('userId');
  const answerLink = userId ? `/post/${userId}/answer` : '/';
  const [showToast, setShowToast] = useState(false);

  const handleLogoLink = () => {
    if (!checkIsLoggedIn()) {
      navigate('/');
      return;
    }

    if (!showToast) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <S.NavbarOuterBox>
      <S.NavbarBox>
        <S.LogoImage src={IMAGES.logo} onClick={handleLogoLink} />
        <Link to={answerLink}>
          <Button type="answer" text="답변하러 가기" />
        </Link>
      </S.NavbarBox>
      {showToast && <Toast text={'이미 로그인하셨습니다!'} bgColor="#B93333" />}
    </S.NavbarOuterBox>
  );
};

export default Navbar;
