import styled from 'styled-components';
import IMAGES from '../../assets';
import { BodyBold2, BodyRegular3, H3 } from '../../styles/typography';
import InputTextArea from '../common/InputTextArea/InputTextArea';
import { useRef, useState } from 'react';
import postQuestions from '../../apis/postQuestions';

const Modal = ({ setActive, setToastText, setShowToast, item }) => {
  const outside = useRef();
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (content !== '') {
      setToastText('저장이 완료되었습니다.');
      const data = await postQuestions(item.id, content);
      if (data) {
        setActive(false);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      }
    } else {
      setToastText('비밀번호를 입력해주세요.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);

    }
  };

  return (
    <>
      <Background
        ref={outside}
        onClick={(e) => {
          if (e.target == outside.current) setActive(false);
        }}
      ></Background>
      <Container>
        <Title>
          <Info>
            <img src={IMAGES.messages} alt="messages" />
            <p>질문을 작성하세요</p>
          </Info>
          <Close
            src={IMAGES.close}
            alt="close"
            onClick={() => setActive((prev) => !prev)}
          />
        </Title>
        <To>
          To.
          <Profile src={item.imageSource} alt="profile" />
          {item.name}
        </To>
        <InputTextArea
          placeholder="질문을 입력해주세요"
          setContent={setContent}
        />
        <Send $hasContent={!!content} onClick={handleSubmit}>
          질문 보내기
        </Send>
      </Container>
    </>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  height: 100%;
  background: var(--Dim, rgba(0, 0, 0, 0.56));
`;

const Container = styled.div`
  position: fixed;
  top: 17.2rem;
  left: 50%;
  transform: translate(-50%, 0%);

  width: 612px;
  height: 454px;
  flex-shrink: 0;
  padding: 40px;
  border-radius: 24px;
  background: var(--grayscale-10, #fff);

  /* 2pt */
  box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 30px;
  margin-bottom: 4.3rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  ${H3};
`;

const Close = styled.img`
  width: 28px;
  height: 28px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

`;

const To = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  ${BodyBold2};
`;

const Profile = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 2.8rem;
`;

const Send = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.8rem;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$hasContent ? props.theme['brown-40'] : props.theme['brown-30']};
  color: ${(props) => props.theme['grayscale-10']};
  ${BodyRegular3};

  &:hover {
    text-decoration: underline;
    background-color: ${(props) => props.theme['brown-50']};
  }
`;

export default Modal;
