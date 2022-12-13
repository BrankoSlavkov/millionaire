import {
  setNextQuestion,
  setStartTimer,
  setStopTimer,
  getTimerIsRunning,
  useStore,
} from '../../store';
import { Timer } from '../Timer/Timer';

import {
  Answer,
  AnswersContainer,
  MainContainer,
  Question,
  Questions,
} from './main.styles';

export const Main = () => {
  const goToNextQuestion = useStore(setNextQuestion);
  const startTimer = useStore(setStartTimer);
  const stopTimer = useStore(setStopTimer);
  const timerIsRunning = useStore(getTimerIsRunning);

  return (
    <MainContainer>
      <Questions>
        {timerIsRunning && <Timer />}
        <Question>
          On a radio, stations are changed by using what control?
        </Question>
        <AnswersContainer>
          <Answer onClick={goToNextQuestion}>Tuning</Answer>
          <Answer onClick={startTimer}>Volume</Answer>
          <Answer onClick={stopTimer}>Bass</Answer>
          <Answer>Treble</Answer>
        </AnswersContainer>
      </Questions>
    </MainContainer>
  );
};
