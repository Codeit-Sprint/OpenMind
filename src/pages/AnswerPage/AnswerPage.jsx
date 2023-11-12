// import styled from 'styled-components';
import { FeedWrapper } from '../../components/Feed/Feed';
import { Empty, List } from '../../components/Feed/Question';
// import FloatingButton from '../../components/common/Button/FloatingButton';
//import Modal from '../../components/modal/Modal';
import react from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getQuestions from '../../apis/getQuestions';
import Toast from '../../components/common/Toast/Toast';
import useSetFetchingWhenScrollEnded from '../../hooks/useSetFetchingWhenScrollEnded';
import getSubjectById from '../../apis/getSubjectById';

const AnswerPage = () => {
  //const [active, setActive] = useState(false);
  const { subjectId } = useParams();
  // const [active, setActive] = react.useState(false);
  const [questions, setQuestions] = react.useState([]);
  const [showToast, setShowToast] = react.useState(false);
  const [toastText, setToastText] = react.useState('URL이 복사되었습니다.');
  const [isFetching, setIsFetching] = react.useState(true);
  const [hasNext, setHasNext] = react.useState(true);
  const [subjectData, setSubjectData] = react.useState(null);

  // Subject 정보 받기 함수
  const getSubjectInfo = async () => {
    const result = await getSubjectById({ subjectId });
    setSubjectData(result);
  };

  // 전체 질문 받는 함수
  const fetchQuestions = async () => {
    const result = await getQuestions({ subjectId, offset: questions.length });
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

  useSetFetchingWhenScrollEnded(setIsFetching); // 무한 스크롤

  useEffect(() => {
    if (!subjectData) getSubjectInfo();

    if (!isFetching) return; // 페이지 들어오는 중
    if (hasNext === null) return; // 다음 페이지가 없을 시
    fetchQuestions();
  }, [isFetching]);

  return (
    <>
      <FeedWrapper item={subjectData} copyLink={copyLink} />
      {!subjectData && questions.length === 0 ? (
        <Empty />
      ) : (
        subjectData && <List questions={questions} subjectData={subjectData} />
      )}

      {showToast ? <Toast text={toastText} /> : null}
    </>
  );
};

export default AnswerPage;
