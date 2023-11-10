import styled from 'styled-components';
import { FeedWrapper } from '../../components/Feed/Feed';
import { Empty, List } from '../../components/Feed/Question';
import FloatingButton from '../../components/common/Button/FloatingButton';
import Modal from '../../components/modal/Modal';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import getQuestions from '../../apis/getQuestions';
import Toast from '../../components/common/Toast/Toast';
import { LINK_BASE_URL } from '../../constants/constant';

const FeedPage = ({ questionList = 0 }) => {
  const [active, setActive] = useState(false);
  const { subjectId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const checkQuestions = async () => {
    const result = await getQuestions({ subjectId });
    setQuestions(result.results);
  };
  const location = useLocation();

  const copyLink = async () => {
    if (showToast) return;

    await navigator.clipboard.writeText(`${LINK_BASE_URL}${location.pathname}`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  useEffect(() => {
    checkQuestions();
  }, []);
  console.log('질문들', questions);

  // const handleModalClick = () => {
  //   setActive(!active);
  // };

  return (
    <>
      <FeedWrapper copyLink={copyLink} />
      {questionList == 0 ? <Empty /> : <List num={questionList} />}
      <ButtonWrapper>
        <FloatingButton setActive={setActive} />
      </ButtonWrapper>
      {active && <Modal status={setActive} />}
      {!!showToast && <Toast />}
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
