import IMAGES from '../../assets';
import FeedCard from '../FeedCard/FeedCard';
import * as S from './ContentList.style';

const Empty = () => {
  return (
    <S.Container>
      <S.Info>
        <img src={IMAGES.messages} alt="messages" />
        <S.Text>아직 질문이 없습니다</S.Text>
      </S.Info>
      <S.MsgImg src={IMAGES.container} alt="container" />
    </S.Container>
  );
};

const QuestionItem = ({ item, subjectData, removeQuestionById }) => {
  return (
    <FeedCard
      item={item}
      subjectData={subjectData}
      removeQuestionById={removeQuestionById}
    />
  );
};

const List = ({ questions, subjectData, removeQuestionById }) => {
  const { questionCount } = subjectData;

  if (!questions) return null;
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
          removeQuestionById={removeQuestionById}
        />
      ))}
    </S.Container>
  );
};

export { Empty, List };
