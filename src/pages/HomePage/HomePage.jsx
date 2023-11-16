import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import postSubjects from '../../apis/postSubjects';
import checkIsLoggedIn from '../../utils/checkIsLoggedIn';
import Toast from '../../components/common/Toast/Toast';
import IMAGES from '../../assets';
import * as S from './HomePage.styles';
import loginSetLocalStorage from '../../utils/loginSetLocalStorage';
import useAsync from '../../hooks/useAsync';

const HomePage = () => {
  const navigate = useNavigate();

  // Toast
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('이름을 입력해주세요!');

  const [name, setName] = useState(null);
  const { refetch } = useAsync(() => postSubjects(name), [name], true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      if (!showToast) {
        setToastText('이름을 입력해주세요!');
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      }
      return;
    }

    try {
      const data = await refetch();
      loginSetLocalStorage({ data }); // 로그인할 때 localStorage 저장하는 함수
      setShowToast(false);
      navigate('/list');
    } catch (error) {
      setToastText('질문 받기에 실패하셨습니다.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  useEffect(() => {
    if (checkIsLoggedIn()) navigate('/list');
  }, []);

  return (
    <S.HomePageBox>
      <S.HomePageLogoImage
        src={IMAGES.logo}
        alt="로고"
        onClick={() => navigate('/')}
      />
      <S.HomePageQuestionButton onClick={() => navigate('/list')}>
        <p>질문하러 가기</p>
        <img src={IMAGES.brownArrowImg} />
      </S.HomePageQuestionButton>
      <S.HomePageOuterFrame>
        <S.HomePageFrame>
          <S.HomePageInputBox>
            <img src={IMAGES.person} alt="이름 입력" autoFocus />
            <input
              type="text"
              placeholder="이름을 입력하세요"
              onChange={(e) => setName(e.target.value)}
              autoFocus
            />
          </S.HomePageInputBox>
          <S.HomePageButton onClick={handleSubmit}>
            <p>질문 받기</p>
          </S.HomePageButton>
        </S.HomePageFrame>
      </S.HomePageOuterFrame>
      {showToast && <Toast text={toastText} bgColor="#B93333" />}
    </S.HomePageBox>
  );
};

export default HomePage;
