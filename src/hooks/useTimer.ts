import { useDispatch, useSelector } from "react-redux";
import {
  start,
  stop,
  reset,
  update,
  selectValue,
  selectWorking,
} from "../stores/slices/timerSlice";

const useTimer = (): Timer => {
  const value = useSelector(selectValue);
  const working = useSelector(selectWorking);
  const dispatch = useDispatch();

  const actions: TimerActions = {
    startTimer: () => {
      if (!working) {
        dispatch(start(Number(setInterval(() => dispatch(update()), 1000))));
      }
    },
    stopTimer: () => dispatch(stop()),
    resetTimer: () => dispatch(reset()),
  };
  return { value, actions };
};

interface Timer {
  value: number;
  actions: TimerActions;
}

interface TimerActions {
  startTimer: () => unknown;
  stopTimer: () => unknown;
  resetTimer: () => unknown;
}

export default useTimer;
