import { useEffect } from 'react';
import { throttle } from 'lodash';
// 이름 수정
const useSetFetchingWhenScrollEnded = ({ setIsScrollFetching }) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (window.innerHeight + scrollTop >= offsetHeight) {
        setIsScrollFetching(true);
      }
    };
    window.addEventListener('scroll', throttle(handleScroll, 200));
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useSetFetchingWhenScrollEnded;
