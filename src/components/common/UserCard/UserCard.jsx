import IMAGES from '../../../assets';
import * as S from './UserCard.style';
import { useNavigate } from 'react-router-dom';

function UserCard({ item }) {
  const navigate = useNavigate();
  const { imageSource: imgSrc, name, questionCount, id } = item;

  return (
    <S.Container onClick={() => navigate(`/post/${id}`)}>
      <S.Profile>
        <S.ProfileImage src={imgSrc} alt="profile" />
        <p>{name}</p>
      </S.Profile>
      <S.Question>
        <S.QuestionInnerBox>
          <img src={IMAGES.messages} alt="messages" />
          <p>받은 질문</p>
        </S.QuestionInnerBox>
        <p>{questionCount}개</p>
      </S.Question>
    </S.Container>
  );
}

export default UserCard;
