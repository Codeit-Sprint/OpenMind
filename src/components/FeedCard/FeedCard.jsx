import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as S from './FeedCard.style';
import IMAGES from '../../assets';
import Badge from '../common/Badge/Badge';
import { Like, Dislike } from '../common/Reaction/Reaction';
import { getElapsedTime } from '../../utils/getElapsedTime';
import Answer from './Answer';

function FeedCard(props) {
  const [showKebab, setShowKebab] = useState(false);
  const { pathname } = useLocation();

  // Feed Page 확인 함수
  const checkIsFeedPage = () => {
    const splitedPath = pathname.split('/');
    if (splitedPath[splitedPath.length - 1] === 'answer') {
      setShowKebab(true);
    }
  };

  useEffect(() => {
    checkIsFeedPage();
  }, []);

  return (
    <S.CardContainer>
      <S.Header>
        <Badge props={props} />
        {!!showKebab && <S.Icon src={IMAGES.kebabImg} />}
      </S.Header>
      <S.QuestionContainer>
        <S.Date>질문 · {getElapsedTime(props.createdAt)}</S.Date>
        <S.QuestionDiv>{props.content}</S.QuestionDiv>
      </S.QuestionContainer>
      {props.answer ? <Answer props={props?.answer} /> : ''}
      <S.Line />
      <S.ReactionDiv>
        <Like like={props.like} />
        <Dislike dislike={props.dislike} />
      </S.ReactionDiv>
    </S.CardContainer>
  );
}

export default FeedCard;
