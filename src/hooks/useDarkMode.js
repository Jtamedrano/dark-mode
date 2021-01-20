import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (i) => {
  const [value, setValue] = useLocalStorage('darkMode', false);

  const [statusDarkMode, setDarkMode] = useState(() => {
    return value ? value : i;
  });

  async function toggleDarkMode() {
    setValue(!statusDarkMode);
    setDarkMode(!statusDarkMode);
  }
  return [statusDarkMode, toggleDarkMode];
};

export default useDarkMode;
