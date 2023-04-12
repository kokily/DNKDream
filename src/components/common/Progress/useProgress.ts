import type { MouseEvent } from 'react';
import { useState, useRef, useCallback, useEffect } from 'react';

export default function useProgress() {
  const [width, setWidth] = useState(0);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const handleProgress = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (progressRef.current !== null) {
      const { scrollWidth } = progressRef.current;
      const { clientX } = e;

      const selected = (clientX / scrollWidth) * 100;

      setWidth(selected);

      const { scrollHeight, clientHeight } = document.body;
      const windowHeight = scrollHeight - clientHeight;
      const scrolled = (windowHeight * selected) / 100;

      window.scrollTo({
        top: scrolled,
        behavior: 'smooth',
      });
    }
  }, []);

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      setWidth(0);
      return;
    }

    const windowHeight = scrollHeight - clientHeight;
    const currentHeight = scrollTop / windowHeight;

    setWidth(currentHeight * 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  return {
    width,
    progressRef,
    handleProgress,
  };
}
