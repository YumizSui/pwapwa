import useTimer from '../../hooks/useTimer';
import styles from './Timer.module.css';

export default function Timer(): JSX.Element {
  const timer = useTimer();
  const {
    startTimer,
    stopTimer,
    resetTimer,
  } = timer.actions;

  return (
    <div>
      <div>
        <span className={styles.value}>{timer.value}</span>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="start timer"
          onClick={startTimer}
          type="button"
        >
          start
        </button>
        <button
          className={styles.button}
          aria-label="stop timer"
          onClick={stopTimer}
          type="button"
        >
          stop
        </button>
        <button
          className={styles.button}
          aria-label="reset timer"
          onClick={resetTimer}
          type="button"
        >
          reset
        </button>
      </div>
    </div>
  );
}
