import { createPagination } from '../../utils/utils';
import * as S from './styles';

const Pagination = ({ count, changeOffset, currentNum, limit }) => {
  const numbers = createPagination({ count, limit, currentNum });

  return (
    <S.PaginationBox>
      {numbers.map((num, index) => (
        <S.PaginationNumberBox
          key={index}
          onClick={() => changeOffset(num)}
          $currentnum={currentNum === num}
        >
          <p>{num}</p>
        </S.PaginationNumberBox>
      ))}
    </S.PaginationBox>
  );
};

export default Pagination;
