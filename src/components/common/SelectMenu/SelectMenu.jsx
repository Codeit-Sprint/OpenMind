import deleteAnswer from '../../../apis/deleteAnswer';
import deleteQuestion from '../../../apis/deleteQuestion';
import patchAnswer from '../../../apis/patchAnswer';
import { deleteLocalStorageAnswer } from '../../../utils/deleteLocalStorageAnswer';
import { deleteLocalStorageReaction } from '../../../utils/deleteLocalStorageReaction';
import { setLocalStorageAnswer } from '../../../utils/setLocalStorageAnswer';
import * as S from './SelectMenu.styles';
import postAnswers from '../../../apis/postAnswers';
let refused = false;
const SelectMenu = ({
  answer,
  questionId,
  selectMenuRef,
  setShowSelectMenu,
  setAnswerInfo,
  removeQuestionById,
}) => {
  // 질문 삭제
  const handleDeleteQuestion = async () => {
    setShowSelectMenu(false);
    await deleteQuestion(questionId);
    deleteLocalStorageAnswer({ questionId });
    deleteLocalStorageReaction({ questionId });
    removeQuestionById(questionId);
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
    refused = true;
    setShowSelectMenu(false);
    if (answer?.content) {
      const result = await patchAnswer({
        answerId: answer?.id,
        isRejected: refused,
        content: answer?.content,
      });

      setAnswerInfo({
        content: result.content,
        createdAt: result.createdAt,
        id: result.id,
        isRejected: result.isRejected,
        questionId: result.questionId,
      });
    } else {
      let createdAt = new Date().toLocaleString();
      const result = await postAnswers(
        questionId,
        'undefined',
        createdAt,
        true,
      );
      setLocalStorageAnswer({
        questionId,
        answerId: result.id,
        isRejected: true,
      });

      setAnswerInfo({
        content: result.content,
        createdAt: result.createdAt,
        id: result.id,
        isRejected: result.isRejected,
        questionId: result.questionId,
      });
    }
  };
  // 답변 거절 취소
  const handleCancelRefuseAnswer = async () => {
    setShowSelectMenu(false);
    refused = false;
    if (answer?.content !== 'undefined') {
      const result = await patchAnswer({
        answerId: answer?.id,
        isRejected: refused,
        content: answer?.content,
      });

      setLocalStorageAnswer({
        questionId,
        answerId: answer.id,
        isRejected: true,
      });

      setAnswerInfo({
        content: result.content,
        createdAt: result.createdAt,
        id: result.id,
        isRejected: result.isRejected,
        questionId: result.questionId,
      });
    } else {
      await deleteAnswer({
        answerId: answer.id,
      });

      deleteLocalStorageAnswer({
        questionId,
      });
      setAnswerInfo(null);
    }
  };

  return (
    <S.SelectMenuBox ref={selectMenuRef}>
      <S.SelectMenuInnerBox onClick={handleDeleteQuestion}>
        <p>질문 삭제</p>
      </S.SelectMenuInnerBox>

      {answer?.content && (
        <S.SelectMenuInnerBox onClick={handleDeleteAnswer}>
          <p>답변 삭제</p>
        </S.SelectMenuInnerBox>
      )}

      {answer?.isRejected ? (
        <S.SelectMenuInnerBox onClick={handleCancelRefuseAnswer}>
          <p>답변 거절 취소</p>
        </S.SelectMenuInnerBox>
      ) : (
        <S.SelectMenuInnerBox onClick={handleRefuseAnswer}>
          <p>답변 거절</p>
        </S.SelectMenuInnerBox>
      )}
    </S.SelectMenuBox>
  );
};
export default SelectMenu;
