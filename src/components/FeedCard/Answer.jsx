/* eslint-disable react/prop-types */
import IMAGES from '../../assets';
import InputTextArea from '../common/InputTextArea/InputTextArea';
import * as S from './Answer.style';
import { Profile, UserName } from './FeedCard.style';
/*
TODO
1. input default 값 적용
*/
function Answer(props) {
  return (
    <S.CardContainer>
      <S.MainSection>
        <Profile src={IMAGES.profile} />
        <S.AnswerDiv>
          <UserName>{props.userName}</UserName>
          <S.InputSection>
            <InputTextArea placeholder="답변을 입력해주세요." />
            <S.AnswerButton> 답변 완료 </S.AnswerButton>
          </S.InputSection>
        </S.AnswerDiv>
      </S.MainSection>
    </S.CardContainer>
  );
}

export default Answer;
