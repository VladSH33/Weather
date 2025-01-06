import { useEffect } from 'react';

export const useOutsideClick = (isActive: boolean, callback: () => void) => {
  useEffect(() => {
    const handleClick = () => {
      if (isActive) callback();
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [isActive, callback]);
};