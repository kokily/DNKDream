import { useState, useRef, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import useLocalStorage from 'use-local-storage';

export default function useHeader() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [, setScrollY] = useLocalStorage('allListPostsScroll', 0);

  const onHome = () => {
    setScrollY(0);
    router.replace('/');
  };

  const onToggleMenu = () => setMenuOpen((prev) => !prev);

  const onOutsideClick = useCallback((e: any) => {
    if (ref.current && !ref.current.contains(e.target as any)) {
      setMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('click', onOutsideClick, true);

    return () => window.removeEventListener('click', onOutsideClick, true);
  }, [ref]);

  return {
    ref,
    menuOpen,
    onHome,
    onToggleMenu,
    onOutsideClick,
  };
}
