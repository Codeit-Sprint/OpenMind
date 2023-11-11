import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import * as S from './FeedCard.style';
import IMAGES from '../../assets';
import Badge from '../common/Badge/Badge';
import { Like, Dislike } from '../common/Reaction/Reaction';
import { getElapsedTime } from '../../utils/getElapsedTime';
import Answer from './Answer';

function FeedCard({ item, answer, subjectData, answerItem }) {
  const { content, createdAt, like, dislike, id: questionId } = item;
  const [showKebab, setShowKebab] = useState(false);
  const { pathname } = useLocation();
  const [reactionClicked, setReactionClicked] = useState(false);

  const reactionArr = JSON.parse(localStorage.getItem('reactionArray'));
  const foundReaction = reactionArr.find(
    (reaction) => reaction.questionId === questionId,
  );

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
        <Badge answer={answer} />
        {!!showKebab && <S.Icon src={IMAGES.kebabImg} />}
      </S.Header>
      <S.QuestionContainer>
        <S.Date>질문 · {getElapsedTime(createdAt)}</S.Date>
        <S.QuestionDiv>{content}</S.QuestionDiv>
      </S.QuestionContainer>
      {answerItem && subjectData && (
        <Answer item={answerItem} subjectData={subjectData} />
      )}
      <S.Line />
      <S.ReactionDiv>
        <Like
          checkedReaction={foundReaction?.like || foundReaction?.dislike}
          likeChecked={foundReaction?.like}
          questionId={questionId}
          like={like}
          setReactionClicked={setReactionClicked}
          reactionClicked={reactionClicked}
        />
        <Dislike
          checkedReaction={foundReaction?.like || foundReaction?.dislike}
          dislikeChecked={foundReaction?.dislike}
          questionId={questionId}
          dislike={dislike}
          setReactionClicked={setReactionClicked}
          reactionClicked={reactionClicked}
        />
      </S.ReactionDiv>
    </S.CardContainer>
  );
}

export default FeedCard;
