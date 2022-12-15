import create from 'zustand';

import { getRandomGame } from '../utils/randomGame';

import { games } from '../data.json';

import { Game, Question } from '../types';

type Data = {
  timerIsRunning: boolean;
  currentQuestion: number;
  questions: Question[];
  games: Game[];
  player: string;
};

type Action = {
  startTimer: () => void;
  stopTimer: () => void;
  setQuestion: () => void;
  setPlayer: (name: string) => void;
};

type StateProps = Data & Action;

export const useStore = create<StateProps>((set) => ({
  timerIsRunning: false,
  currentQuestion: 0,
  games: games,
  questions: [],
  player: '',
  startTimer: () => {
    set((state) => ({ ...state, timerIsRunning: true }));
  },
  stopTimer: () => {
    set((state) => ({ ...state, timerIsRunning: false }));
  },
  setQuestion: () => {
    set((state) => {
      const { currentQuestion, questions } = state;
      if (!questions.length) {
        throw new Error('Something went wrong, Please restart the game');
      }

      const nextQuestionIndex =
        currentQuestion < questions.length - 1
          ? currentQuestion + 1
          : currentQuestion;

      return {
        ...state,
        currentQuestion: nextQuestionIndex,
        timerIsRunning: false,
      };
    });
  },
  setPlayer: (name: string) => {
    set((state) => {
      const gameIndex = getRandomGame(0, games.length - 1);

      return {
        ...state,
        questions: games[gameIndex].questions,
        timerIsRunning: true,
        player: name,
      };
    });
  },
}));

export const getCurrentQuestionIndex = (state: Data) => state.currentQuestion;
export const getTimerIsRunning = (state: Data) => state.timerIsRunning;
export const getQuestionData = (state: Data) =>
  state.questions[state.currentQuestion];
export const getPlayer = (state: Data) => state.player;

export const setNextQuestion = (state: Action) => state.setQuestion;
export const setStartTimer = (state: Action) => state.startTimer;
export const setStopTimer = (state: Action) => state.stopTimer;
export const setPlayer = (state: Action) => state.setPlayer;
