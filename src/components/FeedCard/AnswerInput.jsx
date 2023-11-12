/* eslint-disable react/prop-types */
//import IMAGES from '../../assets';
import InputTextArea from '../common/InputTextArea/InputTextArea';
import * as S from './AnswerInput.style';
import { UserName } from './FeedCard.style';
import { useState } from 'react';
import postAnswers from '../../apis/postAnswers';

function AnswerInput({ item, setAnswer }) {
  const { answer, id: questionId } = item;
  let createdAt = '';
  console.log(item);
  console.log('ANSWER', answer);
  ///const outside = useRef();
  const [content, setContent] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) {
      alert('답변을 입력해주세요!');
      return;
    } else {
      createdAt = Date().toLocaleString();
      const result = await postAnswers(questionId, content, createdAt);
      setAnswer(result);
    }
  };
  return (
    <>
      {answer ? (
        ''
      ) : (
        <S.CardContainer>
          <S.MainSection>
            {/* <StyledProfile src={IMAGES.profile} /> */}
            <S.AnswerDiv>
              <UserName>{item.name}</UserName>
              <S.InputSection>
                <InputTextArea
                  placeholder="답변을 입력해주세요."
                  setContent={setContent}
                />
                <S.Send $hasContent={!!content} onClick={handleSubmit}>
                  답변 보내기
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
