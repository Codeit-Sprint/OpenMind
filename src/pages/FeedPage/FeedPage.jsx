import styled from 'styled-components';
import { FeedWrapper } from '../../components/Feed/Feed';
import { Empty, List } from '../../components/Feed/Question';
import FloatingButton from '../../components/common/Button/FloatingButton';
import Modal from '../../components/modal/Modal';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getQuestions from '../../apis/getQuestions';
import Toast from '../../components/common/Toast/Toast';
import useSetFetchingWhenScrollEnded from '../../hooks/useSetFetchingWhenScrollEnded';
import getSubjectById from '../../apis/getSubjectById';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { USER_ID } from '../../constants/constant';

const FeedPage = () => {
  const [active, setActive] = useState(false);
  const { lockScroll, openScroll } = useBodyScrollLock(); // Modal Open시 Scroll Stop
  if (active) lockScroll();
  else openScroll();

  const { subjectId } = useParams();

  const [count, setCount] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('URL이 복사되었습니다.');
  const [isFetching, setIsFetching] = useState(true);
  const [hasNext, setHasNext] = useState(true);
  const [subjectData, setSubjectData] = useState(null);

  // Subject 정보 받기 함수
  const getSubjectInfo = async () => {
    const result = await getSubjectById({ subjectId });
    setSubjectData(result);
  };

  // 전체 질문 받는 함수
  const fetchQuestions = async () => {
    const result = await getQuestions({ subjectId, offset: questions.length });
    setCount(result.count);
    setHasNext(result.next);
    setQuestions((prev) => [...prev, ...result.results]);
    setIsFetching(false);
  };

  // 링크 복사 클릭 시 발생하는 함수
  const copyLink = async () => {
    if (showToast) return;

    const currentUrl = window.location.href;
    setToastText('URL이 복사되었습니다.');
    await navigator.clipboard.writeText(currentUrl);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  useEffect(() => {
    if (!subjectData) getSubjectInfo();
    if (!isFetching) return; // 페이지 들어오는 중
    if (hasNext === null) return; // 다음 페이지가 없을 시
    fetchQuestions();
  }, [isFetching]);

  useSetFetchingWhenScrollEnded(setIsFetching); // 무한 스크롤

  return (
    <FeedPageWrapper>
      <FeedWrapper item={subjectData} copyLink={copyLink} />
      {questions.length === 0 ? (
        <Empty />
      ) : (
        <List count={count} questions={questions} subjectData={subjectData} />
      )}
      {USER_ID !== subjectId && (
        <ButtonWrapper>
          <FloatingButton setActive={setActive} />
        </ButtonWrapper>
      )}
      {active ? (
        <Modal
          setActive={setActive}
          setShowToast={setShowToast}
          setToastText={setToastText}
          setQuestions={setQuestions}
          item={subjectData}
        />
      ) : null}
      {showToast ? <Toast text={toastText} /> : null}
    </FeedPageWrapper>
  );
};

const FeedPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5.8rem;
  margin-right: 2.4rem;
`;

export default FeedPage;
