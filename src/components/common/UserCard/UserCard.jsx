import * as S from './UserCard.style';
import IMAGES from '../../../assets';

function UserCard({ nickname = '야초는고양이', num = 9 }) {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: '4px',
  };
  return (
    <S.Container>
      <S.Profile>
        <S.ProfileImage src={IMAGES.profile} alt="profile" />
        <p>{nickname}</p>
      </S.Profile>
      <S.Question>
        <div style={style}>
          <img src={IMAGES.messages} alt="messages" />
          <p>받은 질문</p>
        </div>
        <p>{num}개</p>
      </S.Question>
    </S.Container>
  );
}

export default UserCard;
