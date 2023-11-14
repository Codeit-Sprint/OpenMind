import { useState, useEffect, useCallback } from 'react';
import { throttle } from 'lodash';

const useCheckWindowWidthSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    window.addEventListener('resize', throttle(handleResize, 200));
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  return width;
};

export default useCheckWindowWidthSize;
