import { FeedWrapper } from '../../components/Feed/Feed';
import { Empty, List } from '../../components/Feed/Question';

const FeedPage = ({ questionList = 0 }) => {
  return (
    <>
      <FeedWrapper />
      {questionList == 0 ? <Empty /> : <List num={questionList} />}
    </>
  );
};

export default FeedPage;
