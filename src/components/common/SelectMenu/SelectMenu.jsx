import deleteAnswer from '../../../apis/deleteAnswer';
import deleteQuestion from '../../../apis/deleteQuestion';
import putAnswer from '../../../apis/putAnswer';
import { deleteLocalStorageAnswer } from '../../../utils/deleteLocalStorageAnswer';
import { deleteLocalStorageReaction } from '../../../utils/deleteLocalStorageReaction';
import { setLocalStorageAnswer } from '../../../utils/setLocalStorageAnswer';
import * as S from './SelectMenu.styles';

const SelectMenu = ({
  answer,
  questionId,
  selectMenuRef,
  setShowSelectMenu,
  setAnswerInfo,
  reRenderQuestionList,
}) => {
  // 질문 삭제
  const handleDeleteQuestion = async () => {
    setShowSelectMenu(false);
    await deleteQuestion(questionId);
    deleteLocalStorageAnswer({ questionId });
    deleteLocalStorageReaction({ questionId });
    reRenderQuestionList(questionId);
  };

  // 답변 삭제
  const handleDeleteAnswer = async () => {
    setShowSelectMenu(false);
    await deleteAnswer({ answerId: answer.id });
    deleteLocalStorageAnswer({ questionId });
    setAnswerInfo(null);
  };

  // 답변 거절
  const handleRefuseAnswer = async () => {
    setShowSelectMenu(false);
    await putAnswer({
      answerId: answer.id,
      content: answer.content,
      isRejected: true,
    });
    setLocalStorageAnswer({
      questionId,
      answerId: answer.id,
      isRejected: true,
    });
  };

  return (
    <S.SelectMenuBox ref={selectMenuRef}>
      <S.SelectMenuInnerBox onClick={handleDeleteQuestion}>
        <p>질문 삭제</p>
      </S.SelectMenuInnerBox>
      {answer && (
        <>
          <S.SelectMenuInnerBox onClick={handleRefuseAnswer}>
            <p>답변 거절</p>
          </S.SelectMenuInnerBox>
          <S.SelectMenuInnerBox onClick={handleDeleteAnswer}>
            <p>답변 삭제</p>
          </S.SelectMenuInnerBox>
        </>
      )}
    </S.SelectMenuBox>
  );
};

export default SelectMenu;
