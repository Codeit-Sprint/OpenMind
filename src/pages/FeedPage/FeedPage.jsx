import styled from 'styled-components';
import { FeedWrapper } from '../../components/Feed/Feed';
import { Empty, List } from '../../components/Feed/Question';
import FloatingButton from '../../components/common/Button/FloatingButton';
import Modal from '../../components/modal/Modal';
import { useState } from 'react';

const FeedPage = ({ questionList = 0 }) => {
  const [active, setActive] = useState(false);

  const handleModalClick = () => {
    // console.log('질문 작성하기 버튼 클릭');
    setActive(!active);
  };

  return (
    <>
      <FeedWrapper />
      {questionList == 0 ? <Empty /> : <List num={questionList} />}
      <ButtonWrapper onClick={handleModalClick}>
        <FloatingButton />
      </ButtonWrapper>
      {active && <Modal status={setActive} />}
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5.8rem;
  margin-right: 2.4rem;
`;

export default FeedPage;
