import InputTextArea from '../common/InputTextArea/InputTextArea';
import * as S from './AnswerInput.style';
import { useState } from 'react';
import postAnswers from '../../apis/postAnswers';
import putAnswer from '../../apis/putAnswer';
import { setLocalStorageAnswer } from '../../utils/setLocalStorageAnswer';

function AnswerInput({
  item,
  handleAnswerInputClicked,
  answerItem,
  isCorrecting,
  setAnswerInfo,
  setIsCorrecting,
  subjectData,
}) {
  const { id: questionId } = item;
  const { imageSource } = subjectData;
  let createdAt = '';

  const [content, setContent] = useState(answerItem?.content);
  const [showAnswerInput, setShowAnswerInput] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!content) {
      alert('답변을 입력해주세요.');
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
        const result = await putAnswer({ answerId: answerItem?.id, content });
        setAnswerInfo(result);
        console.log(result, setIsCorrecting);
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
            <S.Profile src={imageSource} />
            <S.AnswerDiv>
              <S.UserName>{userName}</S.UserName>
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
