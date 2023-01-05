import { useRef, useEffect } from 'react';
import { setInitialGameDetails } from '../utils/staticValue';
import { TGameObject } from '../utils/types';

function usePreviousState(value: TGameObject, boardSize: string) {
  const initialGameDetails = setInitialGameDetails(boardSize);
  const ref = useRef(initialGameDetails);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePreviousState;
