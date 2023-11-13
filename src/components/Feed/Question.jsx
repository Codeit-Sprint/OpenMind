import deleteSubject from '../../apis/deleteSubject';
import IMAGES from '../../assets';
import { checkUser } from '../../utils/checkUser';
import FeedCard from '../FeedCard/FeedCard';
import * as S from './Question.style';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

const Empty = () => {
  return (
    <S.Container>
      <S.Info>
        <img src={IMAGES.messages} alt="messages" />
        <S.Text>아직 질문이 없습니다</S.Text>
      </S.Info>
      <img src={IMAGES.container} alt="container" />
    </S.Container>
  );
};

const QuestionItem = ({ item, subjectData }) => {
  return <FeedCard item={item} subjectData={subjectData} />;
};

const List = ({ questions, subjectData }) => {
  const navigate = useNavigate();
  const { id: subjectId } = subjectData;
  const [isFeedPage, setIsFeedPage] = useState(false);
  const { questionCount } = subjectData;
  const { pathname } = useLocation();

  const handleAllDelete = async () => {
    if (window.confirm('정말 피드를 삭제하시겠습니까?')) {
      await deleteSubject({ subjectId });
      navigate('/list');
    }
  };

  useEffect(() => {
    const splitedPathName = pathname.split('/');
    if (splitedPathName[splitedPathName.length - 1] !== 'answer') {
      setIsFeedPage(true);
    }
  }, []);

  return (
    <S.Container>
      {checkUser(subjectId) && (
        <S.FloatingDeleteButton onClick={handleAllDelete}>
          <p>삭제하기</p>
        </S.FloatingDeleteButton>
      )}

      <S.Info>
        <img src={IMAGES.messages} alt="messages" />
        <S.Text>{questionCount}개의 질문이 있습니다</S.Text>
      </S.Info>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          item={question}
          subjectData={subjectData}
          isFeedPage={isFeedPage}
        />
      ))}
    </S.Container>
  );
};

export { Empty, List };
