import * as S from './styles';
import getSubjects from '../../apis/getSubjects';

import { useEffect, useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import UserCard from '../../components/common/UserCard/UserCard';
import DropDown from '../../components/common/DropDown/DropDown';
import Navbar from './Navbar';
import useCheckCardSize from '../../hooks/useCheckCardSize';

const Card = ({ item }) => {
  return <UserCard item={item} />;
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
  console.log(loading);
  const [curPageNum, setCurPageNum] = useState(1);
  let userId = localStorage.getItem('userId');
  const width = useCheckCardSize();

  const checkCardWidth = async () => {
    if (width < 936) {
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
      setCurPageNum(Math.round((curPageNum * 8) / 6));
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
      setCurPageNum(Math.round((curPageNum * 6) / 8));
      setLimit(8);
    }
  };

  // Pagination 접근
  const changeOffset = async (num) => {
    if (num === curPageNum || num === '...') return; // 현재 페이지 번호 똑같이 눌렀을때

    const data = await getSubjects({ limit, offset: (num - 1) * limit, sort });
    setCount(data.count);
    setCards(() => data.results);
    setCurPageNum(num);
  };

  // DropDown 접근
  const handleFetchBy = async (item) => {
    setSort(item);
    setCurPageNum(1);
    const data = await getSubjects({
      limit,
      sort: item,
      offset: 0,
    });
    setCount(data.count);
    setCards(() => data.results);
  };

  // 처음 방문
  const firstFetch = async () => {
    const data = await getSubjects({ limit, sort, offset: 0 });
    setCount(data.count);
    setCards(() => data.results);
  };

  useEffect(() => {
    firstFetch();
  }, []);

  useEffect(() => {
    checkCardWidth();
  }, [width]);

  if (cards) {
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
            width={width}
          />
        </S.QuestionMainBox>
      </>
    );
  }
};

export default QuestionListPage;
