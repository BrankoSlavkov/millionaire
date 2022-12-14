import { useEffect } from 'react';
import shallow from 'zustand/shallow';

import {
  getTimerIsRunning,
  useStore,
  getQuestionData,
  setStartGame,
} from '../../store';
import { Timer } from '../Timer/Timer';
import { Answers } from './Answers';

import { MainContainer, Question, Questions } from './main.styles';

export const Main = () => {
  const timerIsRunning = useStore(getTimerIsRunning);
  const questionData = useStore(getQuestionData, shallow);
  const startGame = useStore(setStartGame);

  useEffect(() => {
    startGame();
  }, []);

  return (
    <MainContainer>
      <Questions>
        {timerIsRunning && <Timer />}
        <Question>{questionData?.question}</Question>
        <Answers
          answers={questionData?.content}
          correct={questionData?.correct}
        />
      </Questions>
    </MainContainer>
  );
};
