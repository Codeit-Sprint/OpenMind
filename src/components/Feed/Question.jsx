import IMAGES from '../../assets';
import FeedCard from '../FeedCard/FeedCard';
import * as S from './Question.style';
import AnswerInput from '../FeedCard/AnswerInput';
import { useState } from 'react';

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
  console.log('question pg item', item);
  const { answer: answerItem } = item;
  // const { name, content, isRejected, createdAt, like, dislike, id } = item;
  const [answer, setAnswer] = useState(''); // item.answer
  const userId = window.localStorage.getItem('userId');
  console.log('item', item);
  return (
    <>
      <FeedCard
        item={item}
        subjectData={subjectData}
        answer={answer}
        answerItem={answerItem}
      />
      {item.subjectId === Number(userId) && !item.answer ? (
        <AnswerInput item={item} setAnswer={setAnswer} />
      ) : (
        ''
      )}
    </>
  );
};

const List = ({ count, questions, subjectData }) => {
  console.log('list', questions);
  return (
    <S.Container>
      <S.Info>
        <img src={IMAGES.messages} alt="messages" />
        <S.Text>{count}개의 질문이 있습니다</S.Text>
      </S.Info>
      {questions.map((question) => (
        <QuestionItem
          key={question.id}
          item={question}
          subjectData={subjectData}
        />
      ))}
    </S.Container>
  );
};

export { Empty, List };
