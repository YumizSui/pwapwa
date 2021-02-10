import React from 'react';
import useCounter from '../../hooks/useCounter';
import styles from './Counter.module.css';

export default function Counter(): JSX.Element {
  const counter = useCounter();
  const {
    increment,
    decrement,
    incrementByAmount,
    incrementAsync,
    setIncrementAmount,
  } = counter.actions;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={increment}
          type="button"
        >
          +
        </button>
        <span className={styles.value}>{counter.count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={decrement}
          type="button"
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={counter.incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={incrementByAmount}
          type="button"
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={incrementAsync}
          type="button"
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
