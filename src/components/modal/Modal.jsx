import styled from 'styled-components';
import IMAGES from '../../assets';
import { BodyBold2, BodyRegular3, H3 } from '../../styles/typography';
import InputTextArea from '../common/InputTextArea/InputTextArea';
import { useRef } from 'react';

const Modal = ({ nikcName = '아초는 고양이', status }) => {
  const outside = useRef();

  return (
    <>
      <Background
        ref={outside}
        onClick={(e) => {
          if (e.target == outside.current) status(false);
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
            onClick={() => status((prev) => !prev)}
          />
        </Title>

        <To>
          To.
          <Profile src={IMAGES.profile} alt="profile" />
          {nikcName}
        </To>
        <InputTextArea placeholder="질문을 입력해주세요" />
        <Send>질문 보내기</Send>
      </Container>
    </>
  );
};

const Background = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  background: var(--Dim, rgba(0, 0, 0, 0.56));
`;

const Container = styled.div`
  position: absolute;
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
`;

const To = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  ${BodyBold2};
`;

const Profile = styled.img`
  width: 28px;
  height: 28px;
`;

const Send = styled.div`
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--brown-30, #c7bbb5);
  color: var(--grayscale-10, #fff);
  ${BodyRegular3};
`;

export default Modal;
