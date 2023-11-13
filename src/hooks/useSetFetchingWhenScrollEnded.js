import { useEffect } from 'react';

// 이름 수정
const useSetFetchingWhenScrollEnded = (setIsFetching) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;

      if (window.innerHeight + scrollTop >= offsetHeight) {
        setIsFetching(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export default useSetFetchingWhenScrollEnded;
