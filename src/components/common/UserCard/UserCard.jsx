import * as S from './UserCard.style';
import IMAGES from '../../../assets';

function UserCard({ imgSrc, nickname = '야초는고양이', num = 9 }) {
  return (
    <S.Container>
      <S.Profile>
        <S.ProfileImage src={imgSrc} alt="profile" />
        <p>{nickname}</p>
      </S.Profile>
      <S.Question>
        <S.QuestionInnerBox>
          <img src={IMAGES.messages} alt="messages" />
          <p>받은 질문</p>
        </S.QuestionInnerBox>
        <p>{num}개</p>
      </S.Question>
    </S.Container>
  );
}

export default UserCard;
