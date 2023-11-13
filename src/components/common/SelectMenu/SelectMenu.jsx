import deleteAnswer from '../../../apis/deleteAnswer';
import deleteQuestion from '../../../apis/deleteQuestion';
import patchAnswer from '../../../apis/patchAnswer';
import { deleteLocalStorageAnswer } from '../../../utils/deleteLocalStorageAnswer';
import { deleteLocalStorageReaction } from '../../../utils/deleteLocalStorageReaction';
import { setLocalStorageAnswer } from '../../../utils/setLocalStorageAnswer';
import * as S from './SelectMenu.styles';
let refused = false;
const SelectMenu = ({
  answer,
  questionId,
  selectMenuRef,
  setShowSelectMenu,
  setAnswerInfo,
  reRenderQuestionList,
}) => {
  //const [refused, setRefused] = answer?.isRejected ? answer.isRejected : false;
  //답변 거절 보이기
  //const setShowRefuse = () => setRefused(!refused);

  // 질문 삭제
  const handleDeleteQuestion = async () => {
    setShowSelectMenu(false);
    await deleteQuestion(questionId);
    deleteLocalStorageAnswer(questionId);
    deleteLocalStorageReaction(questionId);
    reRenderQuestionList(questionId);
  };

  // 답변 삭제
  const handleDeleteAnswer = async () => {
    setShowSelectMenu(false);
    await deleteAnswer({ answerId: answer.id });
    deleteLocalStorageAnswer(questionId);
    setAnswerInfo(null);
  };

  // 답변 거절
  const handleRefuseAnswer = async () => {
    //setRefused(true);
    refused = false;
    setShowSelectMenu(false);
    await patchAnswer({
      answerId: answer.id,
      isRejected: refused,
      content: answer.content,
    });
    setLocalStorageAnswer({
      questionId,
      answerId: answer.id,
      isRejected: true,
    });
  };
  // 답변 거절 취소
  const handleCancelRefuseAnswer = async () => {
    setShowSelectMenu(false);
    refused = true;
    //setRefused(false);
    await patchAnswer({
      answerId: answer.id,
      isRejected: refused,
      content: answer.content,
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
      <S.SelectMenuInnerBox onClick={handleDeleteAnswer}>
        <p>답변 삭제</p>
      </S.SelectMenuInnerBox>
      {answer && (
        <>
          {answer?.isRejected ? (
            <S.SelectMenuInnerBox onClick={handleRefuseAnswer}>
              <p>답변 거절 취소</p>
            </S.SelectMenuInnerBox>
          ) : (
            <S.SelectMenuInnerBox onClick={handleCancelRefuseAnswer}>
              <p>답변 거절</p>
            </S.SelectMenuInnerBox>
          )}
        </>
      )}
    </S.SelectMenuBox>
  );
};
export default SelectMenu;
