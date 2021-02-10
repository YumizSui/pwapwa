import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  selectCount,
} from '../stores/slices/counterSlice';

const useCounter = (): Counter => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const actions: CounterActions = {
    incrementByAmount: () =>
      dispatch(incrementByAmount(Number(incrementAmount) || 0)),
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementAsync: () =>
      dispatch(incrementAsync(Number(incrementAmount) || 0)),
    setIncrementAmount,
  };
  return { count, incrementAmount, actions };
};

interface Counter {
  count: number;
  actions: CounterActions;
  incrementAmount: string;
}

interface CounterActions {
  incrementByAmount: () => unknown;
  increment: () => unknown;
  decrement: () => unknown;
  incrementAsync: () => unknown;
  setIncrementAmount: React.Dispatch<React.SetStateAction<string>>;
}

export default useCounter;
