import { useState } from 'react';

const useLocalStorage = (k, i) => {
  const [storedValue, setStoreValue] = useState(() => {
    const item = window.localStorage.getItem(k);
    return item ? JSON.parse(item) : i;
  });

  const setValue = (v) => {
    setStoreValue(v);
    window.localStorage.setItem(k, JSON.stringify(v));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
