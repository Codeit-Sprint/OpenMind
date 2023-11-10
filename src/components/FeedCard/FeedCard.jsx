/* eslint-disable react/prop-types */
import * as S from './FeedCard.style';
import IMAGES from '../../assets';
import Badge from '../common/Badge/Badge';
import { Like, Dislike } from '../common/Reaction/Reaction';
import { getElapsedTime } from '../../utils/getElapsedTime';
import Answer from './Answer';
function FeedCard(props) {
  return (
    <S.CardContainer>
      <S.Header>
        <Badge props={props} />
        <S.Icon src={IMAGES.kebabImg} />
      </S.Header>
      <S.QuestionContainer>
        <S.Date>질문 · {getElapsedTime(props.createdAt)}</S.Date>
        <S.QuestionDiv>{props.content}</S.QuestionDiv>
      </S.QuestionContainer>
      {props.answer ? <Answer props={props?.answer} /> : ''}
      <S.Line />
      <S.ReactionDiv>
        <Like />
        <Dislike />
      </S.ReactionDiv>
    </S.CardContainer>
  );
}

export default FeedCard;
