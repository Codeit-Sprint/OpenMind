import { useLayoutEffect, useState } from 'react';

import getSubjects from '../../apis/getSubjects';
import useCheckWindowWidthSize from '../../hooks/useCheckWindowWidthSize';
import Pagination from '../../components/Pagination/Pagination';
import UserCard from '../../components/common/UserCard/UserCard';
import DropDown from '../../components/common/DropDown/DropDown';
import Navbar from './Navbar';
import * as S from './QuestionListPage.styles';
import useAsync from '../../hooks/useAsync';

const CardList = ({ cards }) => {
  return (
    <>
      {!!cards && cards.map((card) => <UserCard key={card.id} item={card} />)}
    </>
  );
};

const QuestionListPage = () => {
  const [limit, setLimit] = useState(0);
  const [sort, setSort] = useState('time');
  const [count, setCount] = useState(0);
  const [curPageNum, setCurPageNum] = useState(1);
  const [showCards, setShowCards] = useState();
  const { state, refetch } = useAsync(getSubjects, [], true);
  const { data } = state;

  const windowWidth = useCheckWindowWidthSize(); // window resizing

  // 카드의 너비가 186px 이하로 내려갈 경우 -> 카드 6개, 아닐 시 8개 보여주기
  const checkCardWidth = () => {
    let changedLimit = windowWidth >= 936 ? 8 : 6;
    if (limit === changedLimit) return;

    setShowCards(data.results.slice(0, changedLimit));
    setLimit(changedLimit);
    if (changedLimit === 6) setCurPageNum(Math.ceil((curPageNum * 8) / 6));
    else setCurPageNum(Math.floor((curPageNum * 6) / 8));
  };

  // Pagination 접근
  const changeOffset = async (num) => {
    if (num === curPageNum) return; // 현재 페이지 번호 똑같이 눌렀을때

    try {
      const result = await refetch({
        limit: 8,
        sort,
        offset: (num - 1) * limit,
      });
      setShowCards(result?.results.slice(0, limit));
      setCurPageNum(num);
    } catch (err) {
      console.error(err);
    }
  };

  // DropDown 접근
  const handleFetchBy = async (item) => {
    try {
      const result = await refetch({ limit: 8, sort: item, offset: 0 });
      setSort(item);
      setCurPageNum(1);
      setShowCards(result?.results.slice(0, limit));
    } catch (err) {
      console.error(err);
    }
  };

  // 처음 CardList Data 받아오기
  const firstFetch = async () => {
    try {
      const result = await refetch({ limit: 8, sort, offset: 0 });
      let currentLimit = windowWidth >= 936 ? 8 : 6;
      setLimit(currentLimit);
      setShowCards(result?.results.slice(0, currentLimit));
      setCount(result?.count);
    } catch (err) {
      console.error(err);
    }
  };

  useLayoutEffect(() => {
    if (!showCards) firstFetch();
    if (showCards) checkCardWidth();
  }, [windowWidth]);

  if (!showCards) return null;
  return (
    <>
      <Navbar />
      <S.QuestionBarBox>
        <S.QuestionBarHeader>누구에게 질문할까요?</S.QuestionBarHeader>
        <DropDown handleClick={handleFetchBy} />
      </S.QuestionBarBox>

      <S.QuestionMainBox>
        <S.CardList $limit={limit} $width={windowWidth}>
          <CardList cards={showCards} />
        </S.CardList>

        <Pagination
          count={Number(count)}
          changeOffset={changeOffset}
          currentNum={Number(curPageNum)}
          limit={Number(limit)}
          width={windowWidth}
        />
      </S.QuestionMainBox>
    </>
  );
};

export default QuestionListPage;
