import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import IMAGES from '../../assets';
import FeedCard from '../FeedCard/FeedCard';
import * as S from './Question.style';

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
  const [isFeedPage, setIsFeedPage] = useState(false);
  const { questionCount } = subjectData;
  const { pathname } = useLocation();

  useEffect(() => {
    const splitedPathName = pathname.split('/');
    if (splitedPathName[splitedPathName.length - 1] !== 'answer') {
      setIsFeedPage(true);
    }
  }, []);

  return (
    <S.Container>
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
