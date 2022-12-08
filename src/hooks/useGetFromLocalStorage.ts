import { useEffect, useState } from 'react';
import { initialGameDetails } from '../utils/staticValue';
import { TGameObject } from '../utils/types';

function useGetFromLocalStorage(
  key: string,
  defaultValue = initialGameDetails
) {
  const [localStorageItem, setLocalStorageItem] = useState<TGameObject>(() => {
    try {
      const savedItem = localStorage.getItem(key);
      if (savedItem !== null) {
        return JSON.parse(savedItem);
      }
      return defaultValue;
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    setLocalStorageItem(localStorageItem);
  }, [localStorageItem]);

  return localStorageItem;
}

export default useGetFromLocalStorage;
