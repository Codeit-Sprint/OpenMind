import { useRef, useState } from 'react';
import * as S from './Modal.styles';
import IMAGES from '../../assets';
import InputTextArea from '../common/InputTextArea/InputTextArea';
import postQuestions from '../../apis/postQuestions';
import useAsync from '../../hooks/useAsync';
// import useAsync from '../../hooks/useAsync';

const Modal = ({
  setActive,
  setToastText,
  setShowToast,
  subjectData,
  setQuestions,
  getSubjectInfo,
}) => {
  const outside = useRef();
  const [content, setContent] = useState('');
  const { refetch } = useAsync(postQuestions, [], true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (content === '') {
      setToastText('질문을 입력해주세요.');
    } else {
      try {
        const data = await refetch(subjectData.id, content);
        setToastText('저장이 완료되었습니다.');
        getSubjectInfo();
        setActive(false);
        setQuestions((prev) => [data, ...prev]);
      } catch (err) {
        console.error(err);
        setToastText('질문 보내기에 실패했습니다.');
      }
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      <S.Background
        ref={outside}
        onClick={(e) => {
          if (e.target == outside.current) setActive(false);
        }}
      ></S.Background>
      <S.Container>
        <S.Title>
          <S.Info>
            <img src={IMAGES.messages} alt="messages" />
            <p>질문을 작성하세요</p>
          </S.Info>
          <S.Close
            src={IMAGES.close}
            alt="close"
            onClick={() => setActive((prev) => !prev)}
          />
        </S.Title>
        <S.To>
          To.
          <S.Profile src={subjectData.imageSource} alt="profile" />
          {subjectData.name}
        </S.To>
        <InputTextArea
          placeholder="질문을 입력해주세요"
          setContent={setContent}
        />
        <S.Send $hasContent={!!content} onClick={handleSubmit}>
          질문 보내기
        </S.Send>
      </S.Container>
    </>
  );
};

export default Modal;
