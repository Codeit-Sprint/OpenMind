/* eslint-disable react/prop-types */
import IMAGES from '../../assets';
import * as S from './Answer.style';
import { getElapsedTime } from '../../utils/getElapsedTime';

function Answer(props) {
  let profileImg = props.props?.imageSource
    ? props.props?.imageSource
    : IMAGES.profile;
  return (
    <S.MainSection>
      <S.Profile src={profileImg} />
      <S.AnswerDiv>
        <S.ProfileSection>
          <S.UserName>{props.props.name}</S.UserName>
          <S.Date>{getElapsedTime(props.props.createdAt)}</S.Date>
        </S.ProfileSection>
        {!props.props.isRejected ? (
          <S.Post>{props.props.content}</S.Post>
        ) : (
          <S.Post status="답변거절">답변거절</S.Post>
        )}
      </S.AnswerDiv>
    </S.MainSection>
  );
}

export default Answer;
