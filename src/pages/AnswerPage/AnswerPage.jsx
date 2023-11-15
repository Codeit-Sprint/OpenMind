import react from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as S from './AnswerPage.style';
import { Empty, List } from '../../components/Content/ContentList';
import getQuestions from '../../apis/getQuestions';
import Toast from '../../components/common/Toast/Toast';
import useSetFetchingWhenScrollEnded from '../../hooks/useSetFetchingWhenScrollEnded';
import getSubjectById from '../../apis/getSubjectById';
import { checkUser } from '../../utils/checkUser';
import deleteSubject from '../../apis/deleteSubject';
import ContentNavBar from '../../components/Content/ContentNavBar';
import checkIsLoggedIn from '../../utils/checkIsLoggedIn';

const AnswerPage = () => {
  const navigate = useNavigate();
  const { subjectId } = useParams();
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

  const handleAllDelete = async () => {
    if (window.confirm('정말 피드를 삭제하시겠습니까?')) {
      await deleteSubject({ subjectId });
      localStorage.clear();
      navigate('/');
    }
  };

  const removeQuestionById = (deletingQuestionId) => {
    const result = questions.filter(
      (question) => question.id !== deletingQuestionId,
    );
    setQuestions(result);
    getSubjectInfo();
  };

  useSetFetchingWhenScrollEnded(setIsFetching); // 무한 스크롤

  useEffect(() => {
    if (!checkIsLoggedIn()) navigate('/list');
    if (!checkUser(subjectId)) navigate('/list'); // 로그인 한 유저가 아닐 경우
    if (!subjectData) getSubjectInfo();
    if (!isFetching) return; // 페이지 들어오는 중
    if (hasNext === null) return; // 다음 페이지가 없을 시
    fetchQuestions();
  }, [isFetching]);

  if (!subjectData) return null;
  return (
    <>
      <ContentNavBar item={subjectData} copyLink={copyLink} />

      {checkUser(subjectId) && (
        <S.ButtonWrapper>
          <S.FloatingDeleteButton onClick={handleAllDelete}>
            <p>삭제하기</p>
          </S.FloatingDeleteButton>
        </S.ButtonWrapper>
      )}

      {questions.length === 0 || !questions ? (
        <Empty />
      ) : (
        subjectData && (
          <List
            questions={questions}
            subjectData={subjectData}
            removeQuestionById={removeQuestionById}
          />
        )
      )}

      {showToast ? <Toast text={toastText} /> : null}
    </>
  );
};

export default AnswerPage;
