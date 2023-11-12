/* eslint-disable react/prop-types */
//import IMAGES from '../../assets';
import InputTextArea from '../common/InputTextArea/InputTextArea';
import * as S from './AnswerInput.style';
import { UserName } from './FeedCard.style';
import { useState } from 'react';
import postAnswers from '../../apis/postAnswers';
import putAnswer from '../../apis/putAnswer';
import { setLocalStorageAnswer } from '../../utils/setLocalStorageAnswer';

function AnswerInput({
  item,
  handleAnswerInputClicked,
  answerItem,
  isCorrecting,
  setIsCorrecting,
}) {
  const { id: questionId } = item;
  let createdAt = '';

  const [content, setContent] = useState(answerItem?.content);
  const [showAnswerInput, setShowAnswerInput] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content) {
      alert('답변을 입력해주세요!');
      return;
    } else {
      if (!isCorrecting) {
        createdAt = Date().toLocaleString();
        const result = await postAnswers(questionId, content, createdAt);
        setLocalStorageAnswer({
          questionId: result.questionId,
          answerId: result.id,
          isRejected: result.isRejected,
        });
      } else {
        await putAnswer({ answerId: answerItem?.id, content });
        setIsCorrecting(false);
      }
      handleAnswerInputClicked();
      setShowAnswerInput(() => true);
    }
  };
  const userName = localStorage.getItem('userName');

  return (
    <>
      {!showAnswerInput && (
        <S.CardContainer>
          <S.MainSection>
            {/* <StyledProfile src={IMAGES.profile} /> */}
            <S.AnswerDiv>
              <UserName>{userName}</UserName>
              <S.InputSection>
                <InputTextArea
                  placeholder="답변을 입력해주세요"
                  setContent={setContent}
                  content={content}
                />
                <S.Send $hasContent={!!content} onClick={handleSubmit}>
                  {isCorrecting ? '수정 완료' : '답변 완료'}
                </S.Send>
              </S.InputSection>
            </S.AnswerDiv>
          </S.MainSection>
        </S.CardContainer>
      )}
    </>
  );
}

export default AnswerInput;
