import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import * as S from './FeedCard.style';
import IMAGES from '../../assets';
import Badge from '../common/Badge/Badge';
import { Like, Dislike } from '../common/Reaction/Reaction';
import { getElapsedTime } from '../../utils/getElapsedTime';
import Answer from './Answer';
import SelectMenu from '../common/SelectMenu/SelectMenu';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import AnswerInput from './AnswerInput';
import getQuestionById from '../../apis/getQuestionById';
import CorrectionButton from '../common/Button/CorrectionButton';
import Toast from '../common/Toast/Toast';

function FeedCard({ item, subjectData: subjectData, removeQuestionById }) {
  const { content, createdAt, like, dislike, id: questionId, answer } = item;
  const { pathname } = useLocation();

  const [reactionClicked, setReactionClicked] = useState(false);
  const [isCorrecting, setIsCorrecting] = useState(false); // 수정하기 상태

  // Select Menu
  const selectMenuRef = useRef();
  const [showSelectMenu, setShowSelectMenu] = useState(false);
  useOnClickOutside(selectMenuRef, () => setShowSelectMenu(false));

  const reactionArr = JSON.parse(localStorage.getItem('reactionArray')) ?? [];
  const foundReaction = reactionArr.find(
    (reaction) => reaction.questionId === questionId,
  );

  const [foundAnswer, setFoundAnswer] = useState(false);
  const [answerInfo, setAnswerInfo] = useState(answer);

  const [showToast, setShowToast] = useState(false);

  const handleAnswerInputClicked = async () => {
    const result = await getQuestionById({ questionId });
    setAnswerInfo(result.answer);
  };

  // 사용자가 작성한 댓글인지 확인
  const isUserWrittenAnswer = () => {
    if (!answer) return;

    const answerArr = JSON.parse(localStorage.getItem('answerArray')) ?? [];
    const result = answerArr.find((arr) => {
      if (arr.questionId === questionId && arr.answerId === answer.id)
        return true;
    });
    setFoundAnswer(result);
  };

  // Kebab 클릭 함수
  const handleKebabClick = () => {
    setShowSelectMenu((prev) => !prev);
  };

  // Feed Page 확인 함수
  const checkIsFeedPage = () => {
    const splitedPath = pathname.split('/');
    return splitedPath[splitedPath.length - 1] === 'answer';
  };
  const isAnswerPage = checkIsFeedPage();

  // 수정하기 버튼 클릭 시 작용
  const handleEditButton = () => {
    setIsCorrecting(true);
  };

  const showAnswerInput =
    (isAnswerPage && !answerInfo && !isCorrecting) ||
    (isAnswerPage && answerInfo && isCorrecting);

  useEffect(() => {
    isUserWrittenAnswer();
  }, [answer]);

  return (
    <S.CardContainer>
      <S.Header>
        <Badge answer={answerInfo} />
        {!!isAnswerPage && (
          <S.Icon src={IMAGES.kebabImg} onClick={handleKebabClick} />
        )}

        {showSelectMenu && (
          <SelectMenu
            answer={answerInfo}
            questionId={questionId}
            selectMenuRef={selectMenuRef}
            setShowSelectMenu={setShowSelectMenu}
            setAnswerInfo={setAnswerInfo}
            removeQuestionById={removeQuestionById}
          />
        )}
      </S.Header>
      <S.QuestionContainer>
        <S.Date>질문 · {getElapsedTime(createdAt)}</S.Date>
        <S.QuestionDiv>{content}</S.QuestionDiv>
      </S.QuestionContainer>

      {answerInfo && !isCorrecting && subjectData && (
        <Answer item={answerInfo} subjectData={subjectData} />
      )}

      {showAnswerInput && (
        <AnswerInput
          item={item}
          answerItem={answerInfo}
          handleAnswerInputClicked={handleAnswerInputClicked}
          subjectData={subjectData}
          isCorrecting={isCorrecting}
          setIsCorrecting={setIsCorrecting}
        />
      )}

      <S.Line />

      <S.LineUnderDiv>
        <S.ReactionDiv>
          <Like
            checkedReaction={foundReaction?.like || foundReaction?.dislike}
            likeChecked={foundReaction?.like}
            questionId={questionId}
            like={like}
            setReactionClicked={setReactionClicked}
            reactionClicked={reactionClicked}
            setShowToast={setShowToast}
            showToast={showToast}
          />
          <Dislike
            checkedReaction={foundReaction?.like || foundReaction?.dislike}
            dislikeChecked={foundReaction?.dislike}
            questionId={questionId}
            dislike={dislike}
            setReactionClicked={setReactionClicked}
            reactionClicked={reactionClicked}
            setShowToast={setShowToast}
            showToast={showToast}
          />
        </S.ReactionDiv>

        {/* 수정하기 버튼 */}
        {isAnswerPage && !isCorrecting && answer && foundAnswer && (
          <CorrectionButton handleEditButton={handleEditButton} />
        )}
      </S.LineUnderDiv>
      {showToast && (
        <Toast
          text="이름 입력을 완료 한 후 사용 가능한 기능입니다!"
          bgColor="#B93333"
        />
      )}
    </S.CardContainer>
  );
}

export default FeedCard;
