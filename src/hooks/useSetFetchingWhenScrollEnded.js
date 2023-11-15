import { useEffect } from 'react';
import { throttle } from 'lodash';
// 이름 수정
const useSetFetchingWhenScrollEnded = (setIsFetching) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      console.log('scrollTop, offsetHeight', scrollTop, offsetHeight);
      if (window.innerHeight + scrollTop >= offsetHeight) {
        setIsFetching(true);
      }
    };
    window.addEventListener('scroll', throttle(handleScroll, 200));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useSetFetchingWhenScrollEnded;
