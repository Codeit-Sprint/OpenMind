import * as S from './styles';
import * as MainS from '../styles';
import getSubjects from '../../apis/getSubjects';

import IMAGES from '../../assets';
import { Link } from 'react-router-dom';
import { H1 } from '../../styles/typography';
import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';

const Card = ({ item }) => {
  const { imageSource: imgSrc, name, questionCount } = item;
  if (item) {
    return (
      <S.CardBox>
        <S.CardTopBox>
          <S.CardProfileBox>
            <S.CardImgBox>
              <img src={imgSrc} />
            </S.CardImgBox>
          </S.CardProfileBox>
          <p>{name}</p>
        </S.CardTopBox>
        <S.CardBottomBox>
          <p>{questionCount}</p>
        </S.CardBottomBox>
      </S.CardBox>
    );
  }
};

const CardList = ({ cards }) => {
  return (
    <>{!!cards && cards.map((card) => <Card key={card.id} item={card} />)}</>
  );
};

const QuestionListPage = () => {
  const [limit, setLimit] = useState(8);
  const [sort, setSort] = useState('time');
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState([]);
  let userId = localStorage.getItem('userId');

  console.log('쓸데 없는 것들', setLimit);

  const changeOffset = async (num) => {
    const data = await getSubjects({ limit, offset: (num - 1) * limit, sort });
    setCount(Math.floor(data.count / limit));
    setCards(() => data.results);
  };

  const handleFetchBy = async (item) => {
    setSort(item);
    const data = await getSubjects({ limit, sort: item });
    setCount(Math.floor(data.count / limit));
    setCards(() => data.results);
  };

  const firstFetch = async () => {
    const data = await getSubjects({ limit, sort, offset: 0 });
    setCount(Math.floor(data.count / limit));
    setCards(() => data.results);
  };

  useEffect(() => {
    firstFetch();
  }, []);

  if (cards) {
    return (
      <MainS.PageBox>
        <Link to="/">
          <S.LogoImage src={IMAGES.logo} />
        </Link>
        <Link to={userId ? `/post/${userId}/answer` : '/'}>
          <S.AnswerButton>답변하러 가기</S.AnswerButton>
        </Link>
        <S.QuestionBarBox>
          <H1>누구에게 질문할까요?</H1>
          <button onClick={() => handleFetchBy('name')}>이름순</button>
          <button onClick={() => handleFetchBy('time')}>최신순</button>
        </S.QuestionBarBox>
        <S.QuestionMainBox>
          <S.CardList>
            <CardList cards={cards} />
          </S.CardList>
          <Pagination count={count} changeOffset={changeOffset} />
        </S.QuestionMainBox>
      </MainS.PageBox>
    );
  }
};

export default QuestionListPage;
