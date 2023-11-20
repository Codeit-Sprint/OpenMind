import { useLayoutEffect, useState, memo } from 'react';

import getSubjects from '../../apis/getSubjects';
import useCheckWindowWidthSize from '../../hooks/useCheckWindowWidthSize';
import Pagination from '../../components/Pagination/Pagination';
import UserCard from '../../components/common/UserCard/UserCard';
import DropDown from '../../components/common/DropDown/DropDown';
import Navbar from './Navbar';
import * as S from './QuestionListPage.styles';
import useAsync from '../../hooks/useAsync';

export const useDeviceType = () => {
  // mobile, tablet, desktop
  // 최소 1200px : desktop
  // 최소 936px: Card List의 Grid Template column이 3개가 되는 순간
  // 최소 768px ~ 최대 1200px : tablet
  // 최대 768px : mobile
  const width = useCheckWindowWidthSize();
  let deviceType;
  if (width > 1200) {
    deviceType = 'pc';
  } else if (width > 936) {
    deviceType = 'threeCardsInColumn';
  } else if (width > 768) {
    deviceType = 'tablet';
  } else {
    deviceType = 'mobile';
  }

  return deviceType;
};

const CardList = ({ cards }) => {
  return (
    <>
      {!!cards && cards.map((card) => <UserCard key={card.id} item={card} />)}
    </>
  );
};

const MemoizedCardList = memo(CardList);

const QuestionListPage = () => {
  const [limit, setLimit] = useState(0);
  const [sort, setSort] = useState('time');
  const [count, setCount] = useState(0);
  const [curPageNum, setCurPageNum] = useState(1);
  const [showCards, setShowCards] = useState();
  const { state, refetch } = useAsync(getSubjects, [], true);
  const { data } = state;
  const deviceType = useDeviceType();

  // 카드의 너비가 186px 이하로 내려갈 경우 -> 카드 6개, 아닐 시 8개 보여주기

  // PC -> threeCardsInColumn -> tablet -> mobile
  const checkCardWidth = () => {
    // pc와 threeCardsInColumn 까지는 카드들의 개수를 8개 출력 그 이하 px에서는 6개 출력
    let changedLimit =
      deviceType === 'pc' || deviceType === 'threeCardsInColumn' ? 8 : 6;
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
      let currentLimit = deviceType === 'pc' ? 8 : 6;
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
  }, [deviceType]);

  if (!showCards) return null;
  return (
    <>
      <Navbar />
      <S.QuestionBarBox>
        <S.QuestionBarHeader>누구에게 질문할까요?</S.QuestionBarHeader>
        <DropDown handleClick={handleFetchBy} />
      </S.QuestionBarBox>

      <S.QuestionMainBox>
        <S.CardList $limit={limit} $deviceType={deviceType}>
          <MemoizedCardList cards={showCards} />
        </S.CardList>

        <Pagination
          count={Number(count)}
          changeOffset={changeOffset}
          currentNum={Number(curPageNum)}
          limit={Number(limit)}
          deviceType={deviceType}
        />
      </S.QuestionMainBox>
    </>
  );
};

export default QuestionListPage;
