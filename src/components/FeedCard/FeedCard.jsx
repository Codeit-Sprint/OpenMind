/* eslint-disable react/prop-types */
import * as S from './FeedCard.style';
import IMAGES from '../../assets';
import Badge from '../common/Badge/Badge';
import { Like, Dislike } from '../common/Reaction/Reaction';

function FeedCard(props) {
  let postText = '';
  if (props.status === '답변거절') {
    postText = props.status;
  } else {
    postText = props.text;
  }
  return (
    <S.CardContainer>
      <S.Header>
        <Badge status={props.status} />
        <S.Icon src={IMAGES.kebabImg} />
      </S.Header>

      <S.Date>질문 · 2주전</S.Date>
      <S.QuestionDiv>
        좋아하는 동물은?좋아하는 동물은?좋아하는 동물은? 좋아하동 물은?
      </S.QuestionDiv>
      <S.MainSection>
        <S.Profile src={IMAGES.profile} />
        <S.AnswerDiv>
          <S.ProfileSection>
            <S.UserName>아초는 고양이</S.UserName> <S.Date>2주전</S.Date>
          </S.ProfileSection>
          <S.Post status={props.status}>{postText}</S.Post>
        </S.AnswerDiv>
      </S.MainSection>
      <S.Line />
      <S.ReactionDiv>
        <Like />
        <Dislike />
      </S.ReactionDiv>
    </S.CardContainer>
  );
}

export default FeedCard;
