import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface timerState {
  value: number;
  working: boolean;
  intervalID: number;
}

const initialState: timerState = {
  value: 0,
  working: false,
  intervalID: -1,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    start: (state, action: PayloadAction<number>) => ({
      ...state,
      working: true,
      intervalID: action.payload,
    }),
    stop: (state) => {
      clearInterval(state.intervalID);
      return { ...state, working: false };
    },
    reset: (state) => {
      clearInterval(state.intervalID);
      return initialState;
    },
    update: (state) => ({ ...state, value: state.value + 1 }),
  },
});

export const selectValue = (state: RootState): number => state.timer.value;
export const selectWorking = (state: RootState): boolean => state.timer.working;

export const { start, stop, reset, update } = timerSlice.actions;

export default timerSlice.reducer;
