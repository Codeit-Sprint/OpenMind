import deleteAnswer from '../../../apis/deleteAnswer';
import deleteQuestion from '../../../apis/deleteQuestion';
import * as S from './SelectMenu.styles';

const SelectMenuItem = ({ text, questionId, answerId }) => {
  const handleClick = async () => {
    if (text === '답변 거절') {
      console.log('답변 거절 클릭');
    } else if (text === '질문 삭제') {
      await deleteQuestion({ questionId });
    } else if (text === '답변 삭제') {
      await deleteAnswer({ answerId });
    }
  };

  return (
    <S.SelectMenuInnerBox onClick={handleClick}>
      <p>{text}</p>
    </S.SelectMenuInnerBox>
  );
};

const SelectMenu = ({ answerId, questionId }) => {
  return (
    <S.SelectMenuBox>
      <SelectMenuItem text="질문 삭제" questionId={questionId} />
      <SelectMenuItem text="답변 거절" />
      <SelectMenuItem text="답변 삭제" answerId={answerId} />
    </S.SelectMenuBox>
  );
};

export default SelectMenu;
