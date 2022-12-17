import shallow from 'zustand/shallow';

import {
  getTimerIsRunning,
  useStore,
  getQuestionData,
  getIsAnswering,
} from '../../store';
import { Timer } from '../Timer/Timer';
import { Answers } from './Answers';

import { MainContainer, Question, Questions } from './main.styles';

export const Main = () => {
  const timerIsRunning = useStore(getTimerIsRunning);
  const questionData = useStore(getQuestionData, shallow);
  const isAnswering = useStore(getIsAnswering);

  return (
    <MainContainer>
      <Questions>
        {timerIsRunning && !isAnswering ? <Timer /> : null}
        <Question>{questionData?.question}</Question>
        <Answers
          answers={questionData?.content}
          correct={questionData?.correct}
        />
      </Questions>
    </MainContainer>
  );
};
