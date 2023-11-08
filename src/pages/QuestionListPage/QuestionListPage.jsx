import * as S from './styles';
import getSubjects from '../../apis/getSubjects';

import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import UserCard from '../../components/common/UserCard/UserCard';
import DropDown from '../../components/common/DropDown/DropDown';
import Navbar from './Navbar';
import useCheckCardSize from '../../hooks/useCheckCardSize';

const Card = ({ item }) => {
  const { imageSource: imgSrc, name, questionCount } = item;
  return <UserCard imgSrc={imgSrc} nickname={name} num={questionCount} />;
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
  const [loading, setLoading] = useState(false);
  const [curPageNum, setCurPageNum] = useState(1);
  let userId = localStorage.getItem('userId');
  const width = useCheckCardSize();

  const checkCardWidth = async () => {
    if (width) {
      if (limit === 6) return;
      setLoading(true);
      const data = await getSubjects({
        limit: 6,
        offset: (curPageNum - 1) * limit,
        sort,
      });
      setLoading(false);
      setCount(data.count);
      setCards(() => data.results);
      setCurPageNum(curPageNum);
      setLimit(6);
    } else {
      if (limit === 8) return;
      setLoading(true);
      const data = await getSubjects({
        limit: 8,
        offset: (curPageNum - 1) * limit,
        sort,
      });
      setLoading(false);
      setCount(data.count);
      setCards(() => data.results);
      setCurPageNum(curPageNum);
      setLimit(8);
    }
  };

  console.log('위드', width);

  // Pagination 접근
  const changeOffset = async (num) => {
    if (num === curPageNum || num === '...') return; // 현재 페이지 번호 똑같이 눌렀을때

    setLoading(true);
    const data = await getSubjects({ limit, offset: (num - 1) * limit, sort });
    setLoading(false);
    setCount(data.count);
    setCards(() => data.results);
    setCurPageNum(num);
  };

  // DropDown 접근
  const handleFetchBy = async (item) => {
    if (item === sort) return; // 현재 sorting방식으로 다시 들어갔을 때

    setSort(item);
    setCurPageNum(1);
    setLoading(true);
    const data = await getSubjects({
      limit,
      sort: item,
      offset: 0,
    });
    setLoading(false);
    setCount(data.count);
    setCards(() => data.results);
  };

  // 처음 방문
  const firstFetch = async () => {
    setLoading(true);
    const data = await getSubjects({ limit, sort, offset: 0 });
    setLoading(false);
    setCount(data.count);
    setCards(() => data.results);
  };

  useEffect(() => {
    firstFetch();
  }, []);

  useEffect(() => {
    checkCardWidth();
  }, [width]);

  if (cards && !loading) {
    return (
      <>
        <Navbar userId={userId} />
        <S.QuestionBarBox>
          <S.QuestionBarHeader>누구에게 질문할까요?</S.QuestionBarHeader>
          <DropDown handleClick={handleFetchBy} />
        </S.QuestionBarBox>

        <S.QuestionMainBox>
          <S.CardList $limit={limit} $width={width}>
            <CardList cards={cards} />
          </S.CardList>
          <Pagination
            count={Number(count)}
            changeOffset={changeOffset}
            currentNum={Number(curPageNum)}
            limit={Number(limit)}
          />
        </S.QuestionMainBox>
      </>
    );
  }
};

export default QuestionListPage;
