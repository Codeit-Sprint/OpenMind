import { useLayoutEffect, useState } from 'react';

import getSubjects from '../../apis/getSubjects';
import useCheckWindowWidthSize from '../../hooks/useCheckWindowWidthSize';
import Pagination from '../../components/Pagination/Pagination';
import UserCard from '../../components/common/UserCard/UserCard';
import DropDown from '../../components/common/DropDown/DropDown';
import Navbar from './Navbar';
import * as S from './QuestionListPage.styles';

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
  const [cards, setCards] = useState();
  const [showCards, setShowCards] = useState();
  const [curPageNum, setCurPageNum] = useState(1);
  const windowWidth = useCheckWindowWidthSize(); // window resizing

  // 카드의 너비가 186px 이하로 내려갈 경우 -> 카드 6개, 아닐 시 8개 보여주기
  const checkCardWidth = async () => {
    let changedLimit = 6;
    if (windowWidth >= 936) changedLimit = 8;
    if (limit === changedLimit) return;

    setShowCards(cards.slice(0, changedLimit));
    setLimit(changedLimit);
    if (changedLimit === 6) setCurPageNum(Math.ceil((curPageNum * 8) / 6));
    else setCurPageNum(Math.floor((curPageNum * 6) / 8));
  };

  // Pagination 접근
  const changeOffset = async (num) => {
    if (num === curPageNum) return; // 현재 페이지 번호 똑같이 눌렀을때

    const result = await getSubjects({
      limit: 8,
      offset: (num - 1) * limit,
      sort,
    });
    setCards(result.results);
    setShowCards(result.results.slice(0, limit));
    setCurPageNum(num);
  };

  // DropDown 접근
  const handleFetchBy = async (item) => {
    setSort(item);
    setCurPageNum(1);
    const result = await getSubjects({
      limit: 8,
      sort: item,
      offset: 0,
    });
    setShowCards(result.results.slice(0, limit));
    setCards(result.results);
  };

  // 처음 카드 받아오기
  const firstFetch = async () => {
    const data = await getSubjects({ limit: 8, sort, offset: 0 });
    let currentLimit = 0;
    if (windowWidth >= 936) currentLimit = 8;
    else currentLimit = 6;
    setLimit(currentLimit);
    setShowCards(data.results.slice(0, currentLimit));
    setCount(data.count);
    setCards(data.results);
  };

  // useLayoutEffect를 사용하면 자연스럽게 되지만 다른 방식을 사용해보자!
  useLayoutEffect(() => {
    if (!showCards) firstFetch();
    if (showCards) checkCardWidth();
  }, [windowWidth]);

  if (showCards) {
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
  }
};

export default QuestionListPage;
