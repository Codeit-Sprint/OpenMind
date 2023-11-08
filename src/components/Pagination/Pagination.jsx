import * as S from './styles';

const Pagination = ({ count, changeOffset }) => {
  const numbers = [];
  for (let i = 1; i <= count; i++) {
    numbers.push(i);
  }

  return (
    <S.PaginationBox>
      {numbers.map((num) => (
        <S.PaginationNumberBox key={num} onClick={() => changeOffset(num)}>
          <p>{num}</p>
        </S.PaginationNumberBox>
      ))}
    </S.PaginationBox>
  );
};

export default Pagination;
