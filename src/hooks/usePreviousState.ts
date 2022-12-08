import { useRef, useEffect } from 'react';
import { initialGameDetails } from '../utils/staticValue';
import { TGameObject } from '../utils/types';

function usePreviousState(value: TGameObject) {
  const ref = useRef(initialGameDetails);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePreviousState;
