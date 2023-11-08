const createPagination = ({ count, limit, currentNum }) => {
  const maxPageNumber = Math.ceil(count / limit);
  const totalNumbers = [];
  for (let i = 1; i <= maxPageNumber; i++) totalNumbers.push(i);

  let numbers = [];

  // page가 7개 이하면 ... 이 등장하지 않는다.
  if (maxPageNumber <= 7) {
    return totalNumbers;
  } else {
    // 현재 page의 위치가 양쪽에 ... 이 생겨야 하는 경우
    if (5 <= currentNum && currentNum <= maxPageNumber - 4) {
      const midNumbers = totalNumbers.slice(currentNum - 3, currentNum + 3);
      numbers = [1, '...', ...midNumbers, '...', maxPageNumber];
    } else if (5 <= currentNum && currentNum > maxPageNumber - 4) {
      // 현재 page의 위치가 왼쪽에 ... 이 생겨야 하는 경우
      const midNumbers = totalNumbers.slice(
        totalNumbers.length - 8,
        totalNumbers.length,
      );
      numbers = [1, '...', ...midNumbers];
      return numbers;
    } else if (5 > currentNum) {
      // 현재 page의 위치가 오른쪽에 ... 이 생겨야 하는 경우
      const midNumbers = totalNumbers.slice(0, 7);
      numbers = [...midNumbers, '...', maxPageNumber];
      return numbers;
    }
  }

  return numbers;
};

export { createPagination };
