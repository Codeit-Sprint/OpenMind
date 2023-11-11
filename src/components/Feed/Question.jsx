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

const QuestionItem = ({ item }) => {
  const { name, content, isRejected, createdAt, like, dislike } = item;

  return (
    <FeedCard
      name={name}
      content={content}
      isRejected={isRejected}
      createdAt={createdAt}
      like={like}
      dislike={dislike}
    />
  );
};

const List = ({ questions }) => {
  return (
    <S.Container>
      <S.Info>
        <img src={IMAGES.messages} alt="messages" />
        <S.Text>{questions.length}개의 질문이 있습니다</S.Text>
      </S.Info>

      {questions.map((question) => (
        <QuestionItem key={question.id} item={question} />
      ))}
    </S.Container>
  );
};

export { Empty, List };
