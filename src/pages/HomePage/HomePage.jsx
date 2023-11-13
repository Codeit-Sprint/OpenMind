import { Link, useNavigate } from 'react-router-dom';
import IMAGES from '../../assets';
import * as S from './HomePage.styles';
import { useEffect, useState } from 'react';
import postSubjects from '../../apis/postSubjects';

const HomePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      alert('이름을 입력해주세요!');
      return;
    }

    const data = await postSubjects(name);
    if (data) {
      localStorage.setItem('userName', data.name);
      localStorage.setItem('imageSource', data.imageSource);
      localStorage.setItem('userId', data.id);
      localStorage.setItem('answerArray', JSON.stringify([]));
      localStorage.setItem('reactionArray', JSON.stringify([]));
      navigate(`/post/${data.id}/answer`);
    }
  };

  // 로그인 되어 있는지 확인하는 함수
  const checkIsLoggedIn = () => {
    if (localStorage.getItem('userId')) {
      navigate('/list');
    }
  };

  useEffect(() => {
    checkIsLoggedIn();
  }, []);
  return (
    <S.HomePageBox>
      <Link to="/list">
        <S.HomePageQuestionButton>질문하러 가기</S.HomePageQuestionButton>
      </Link>
      <Link to="/">
        <S.HomePageLogoImage src={IMAGES.logo} alt="로고" />
      </Link>
      <S.HomePageOuterFrame>
        <S.HomePageFrame>
          <S.HomePageInputBox>
            <img src={IMAGES.person} alt="이름 입력" autoFocus />
            <input
              type="text"
              placeholder="이름을 입력하세요"
              onChange={(e) => setName(e.target.value)}
            />
          </S.HomePageInputBox>
          {/* <p>이름을 입력해주세요!</p> */}
          <S.HomePageButton onClick={handleSubmit}>
            <p>질문 받기</p>
          </S.HomePageButton>
        </S.HomePageFrame>
      </S.HomePageOuterFrame>
    </S.HomePageBox>
  );
};

export default HomePage;
