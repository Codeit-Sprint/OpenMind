import { Link, useNavigate } from 'react-router-dom';
import IMAGES from '../assets';
import * as S from './styles';
import { useState } from 'react';
import { fetchPost } from '../apis/api';
import { DEFAULT_TEAM_PATH } from '../constants/constant';

const HomePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetchPost('/subjects/', {
      name: name,
      team: DEFAULT_TEAM_PATH,
    });
    navigate(`/post/${result.id}/answer`);
  };

  return (
    <S.HomePageBox>
      <Link to="/link">
        <S.HomePageQuestionButton>질문하러 가기</S.HomePageQuestionButton>
      </Link>
      <Link to="/">
        <img src={IMAGES.logo} alt="로고" />
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
          <S.HomePageButton onClick={handleSubmit}>
            <p>질문 받기</p>
          </S.HomePageButton>
        </S.HomePageFrame>
      </S.HomePageOuterFrame>
    </S.HomePageBox>
  );
};

export default HomePage;
