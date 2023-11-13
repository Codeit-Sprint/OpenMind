import deleteAnswer from '../../../apis/deleteAnswer';
import deleteQuestion from '../../../apis/deleteQuestion';
//import postAnswers from '../../../apis/postAnswers';
import patchAnswer from '../../../apis/patchAnswer';
import * as S from './SelectMenu.styles';

const SelectMenu = ({
  answer,
  questionId,
  selectMenuRef,
  setShowSelectMenu,
}) => {
  // 질문 삭제
  const handleDeleteQuestion = async () => {
    setShowSelectMenu(false);
    const result = await deleteQuestion(questionId);
    console.log('RESSS', result);
  };

  // 답변 삭제
  const handleDeleteAnswer = async () => {
    setShowSelectMenu(false);
    await deleteAnswer({ answerId: answer.id });
  };

  // 답변 거절
  const handleRefuseAnswer = async () => {
    setShowSelectMenu(false);
    // answer?
    await patchAnswer({
      answerId: answer.id,
      isRejected: true,
      content: answer.content,
    });
    // : await postAnswers({
    //     answerId: answer.id,
    //     content: '',
    //     isRejected: true,
    //   });
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
