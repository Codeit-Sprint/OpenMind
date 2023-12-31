/* eslint-disable react/prop-types */
import IMAGES from '../../assets';
import * as S from './Answer.style';
import { getElapsedTime } from '../../utils/getElapsedTime';

function Answer({ item, subjectData }) {
  const { createdAt, content, isRejected } = item;
  const imageSource = subjectData?.imageSource;
  const name = subjectData?.name;

  let profileImg = imageSource ? imageSource : IMAGES.profile;

  return (
    <S.MainSection>
      <S.Profile src={profileImg} />
      <S.AnswerDiv>
        <S.ProfileSection>
          <S.UserName>{name}</S.UserName>
          <S.Date>{getElapsedTime(createdAt)}</S.Date>
        </S.ProfileSection>
        <S.Post text={isRejected ? '답변 거절' : ''}>
          {isRejected ? '답변 거절' : content}
        </S.Post>
      </S.AnswerDiv>
    </S.MainSection>
  );
}

export default Answer;
