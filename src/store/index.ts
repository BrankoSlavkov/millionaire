import create from 'zustand';

type Data = {
  timerIsRunning: boolean;
  currentQuestion: number;
};

type Action = {
  startTimer: () => void;
  stopTimer: () => void;
  setQuestion: () => void;
};

type StateProps = Data & Action;

export const useStore = create<StateProps>((set) => ({
  timerIsRunning: false,
  currentQuestion: 0,
  startTimer: () => {
    set((state) => ({ ...state, timerIsRunning: true }));
  },
  stopTimer: () => {
    set((state) => ({ ...state, timerIsRunning: false }));
  },
  setQuestion: () => {
    set((state) => ({ ...state, currentQuestion: state.currentQuestion + 1 }));
  },
}));

export const getCurrentQuestionIndex = (state: Data) => state.currentQuestion;
export const getTimerIsRunning = (state: Data) => state.timerIsRunning;

export const setNextQuestion = (state: Action) => state.setQuestion;
export const setStartTimer = (state: Action) => state.startTimer;
export const setStopTimer = (state: Action) => state.stopTimer;
