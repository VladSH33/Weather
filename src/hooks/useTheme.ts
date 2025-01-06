import { useState, useEffect } from 'react';
import { THEME_LOCAL_STORAGE_KEY } from '../constants';

export const useTheme = (systemTheme: string) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(THEME_LOCAL_STORAGE_KEY) ?? systemTheme
  );

  useEffect(() => {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
};