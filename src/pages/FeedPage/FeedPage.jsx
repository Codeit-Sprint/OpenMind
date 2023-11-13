import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FeedWrapper } from '../../components/Feed/Feed';
import { Empty, List } from '../../components/Feed/Question';
import FloatingButton from '../../components/common/Button/FloatingButton';
import Modal from '../../components/Modal/Modal';
import Toast from '../../components/common/Toast/Toast';

import getQuestions from '../../apis/getQuestions';
import getSubjectById from '../../apis/getSubjectById';
import useSetFetchingWhenScrollEnded from '../../hooks/useSetFetchingWhenScrollEnded';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { checkUser } from '../../utils/checkUser';

import * as S from './FeedPage.styles';

const FeedPage = () => {
  const [active, setActive] = useState(false);
  const { lockScroll, openScroll } = useBodyScrollLock(); // Modal Open시 Scroll Stop
  const { subjectId } = useParams();

  const [questions, setQuestions] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('URL이 복사되었습니다.');
  const [isFetching, setIsFetching] = useState(true);
  const [hasNext, setHasNext] = useState(true);
  const [subjectData, setSubjectData] = useState(null);

  // Subject 정보 받기 함수
  const getSubjectInfo = async () => {
    const result = await getSubjectById({ subjectId });
    setSubjectData(() => result);
  };

  // 전체 질문 받는 함수
  const fetchQuestions = async () => {
    const result = await getQuestions({ subjectId, offset: questions.length });
    setHasNext(result.next);
    setQuestions((prev) => [...prev, ...result.results]);
    setIsFetching(false);
  };

  // 링크 복사 클릭 시 발생하는 함수
  const copyLink = () => {
    if (showToast) return;

    const currentUrl = window.location.href;
    setToastText('URL이 복사되었습니다.');
    navigator.clipboard.writeText(currentUrl);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  useEffect(() => {
    if (!subjectData) getSubjectInfo();
    if (!isFetching) return; // 페이지 들어오는 중
    if (hasNext === null) return; // 다음 페이지가 없을 시
    fetchQuestions();
  }, [isFetching]);

  useEffect(() => {
    if (active) lockScroll();
    else openScroll();
  }, [active]);

  useSetFetchingWhenScrollEnded(setIsFetching); // 무한 스크롤

  return (
    <S.FeedPageWrapper>
      <FeedWrapper item={subjectData} copyLink={copyLink} />
      {questions.length === 0 ? (
        <Empty />
      ) : (
        <List questions={questions} subjectData={subjectData} />
      )}

      {/* Subject를 작성한 것이 User인지 확인하는 함수: User일 시 질문 작성하기 버튼 안보이게 해야 함  checkUser(subjectId) 여야 함 */}
      {!checkUser(subjectId) && (
        <S.ButtonWrapper>
          <FloatingButton setActive={setActive} />
        </S.ButtonWrapper>
      )}
      {active ? (
        <Modal
          setActive={setActive}
          setShowToast={setShowToast}
          setToastText={setToastText}
          setQuestions={setQuestions}
          getSubjectInfo={getSubjectInfo}
          subjectData={subjectData}
        />
      ) : null}
      {showToast ? <Toast text={toastText} /> : null}
    </S.FeedPageWrapper>
  );
};

export default FeedPage;
