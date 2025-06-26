import { useRef } from 'react';

const useScrollLock = () => {
  const scrollPositionRef = useRef(0);

  return isLock => {
    if (isLock) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      scrollPositionRef.current = document.documentElement.scrollTop;

      Object.assign(document.body.style, {
        position: 'fixed',
        top: `-${scrollPositionRef.current}px`,
        width: '100%',
        paddingRight: `${scrollbarWidth}px`,
      });
    } else {
      Object.assign(document.body.style, {
        position: '',
        top: '',
        width: '',
        paddingRight: '',
      });

      window.scrollTo(0, scrollPositionRef.current);
    }
  };
};

export { useScrollLock };