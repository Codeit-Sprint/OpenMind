import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Empty, List } from '../../components/Content/ContentList';
import FloatingButton from '../../components/common/Button/FloatingButton';
import Modal from '../../components/Modal/Modal';
import Toast from '../../components/common/Toast/Toast';

import getQuestions from '../../apis/getQuestions';
import getSubjectById from '../../apis/getSubjectById';
import useSetFetchingWhenScrollEnded from '../../hooks/useSetFetchingWhenScrollEnded';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { checkUser } from '../../utils/checkUser';

import * as S from './FeedPage.styles';
import ContentNavBar from '../../components/Content/ContentNavBar';
import useAsync from '../../hooks/useAsync';

const FeedPage = () => {
  const [active, setActive] = useState(false);
  const { subjectId } = useParams();

  // Modal Open시 Scroll Stop
  const { lockScroll, openScroll } = useBodyScrollLock();
  if (active) lockScroll();
  else openScroll();

  const [questions, setQuestions] = useState([]);
  const [isScrollFetching, setIsScrollFetching] = useState(true);

  // Toast
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('URL이 복사되었습니다.');

  const { state: questionState, refetch: refetchQuestions } = useAsync(
    getQuestions,
    [],
    true,
  );
  const { refetch: refetchSubject } = useAsync(getSubjectById, [], true);

  const [subjectData, setSubjectData] = useState(null);
  const { data: questionData } = questionState;

  // Subject 정보 받기 함수
  const getSubjectInfo = async () => {
    const result = await refetchSubject({ subjectId });
    setSubjectData(result);
  };

  // 전체 질문 받는 함수
  const fetchQuestions = async () => {
    const result = await refetchQuestions({
      subjectId,
      offset: questions.length,
    });
    setQuestions((prev) => [...prev, ...result.results]);
    setIsScrollFetching(false);
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
    if (!isScrollFetching) return; // 페이지 들어오는 중
    if (questionData && questionData.next === null) return; // 다음 페이지가 없을 시
    fetchQuestions();
  }, [isScrollFetching]);

  useSetFetchingWhenScrollEnded({ setIsScrollFetching }); // 무한 스크롤

  if (!subjectData) return null;

  return (
    <S.FeedPageWrapper>
      <ContentNavBar item={subjectData} copyLink={copyLink} />

      {questions.length === 0 ? (
        <Empty />
      ) : (
        <List questions={questions} subjectData={subjectData} />
      )}

      {/* Subject를 작성한 것이 User인지 확인하는 함수: User일 시 질문 작성하기 버튼 안보이게 해야 함  */}
      {checkUser(subjectId) && (
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
      {showToast ? (
        <Toast
          text={toastText}
          bgColor={toastText === '질문을 입력해주세요.' ? '#B93333' : '#000'}
        />
      ) : null}
    </S.FeedPageWrapper>
  );
};

export default FeedPage;
