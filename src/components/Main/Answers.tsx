import { useEffect } from 'react';
import {
  getCurrentQuestionIndex,
  setNextQuestion,
  setStartTimer,
  useStore,
} from '../../store';
import { Question } from '../../types';
import { Answer, AnswersContainer } from './main.styles';

type AnswersProps = {
  answers?: Question['content'];
  correct?: Question['correct'];
};

export const Answers = ({ answers, correct }: AnswersProps) => {
  const goToNext = useStore(setNextQuestion);
  const questionId = useStore(getCurrentQuestionIndex);
  const startTimer = useStore(setStartTimer);

  const answerClickHandler = (index: number) => {
    if (index === correct) {
      goToNext();
    }
  };

  useEffect(() => {
    startTimer();
  }, [questionId]);

  return (
    <AnswersContainer>
      {answers?.map((answer, index) => (
        <Answer key={answer} onClick={() => answerClickHandler(index)}>
          {answer}
        </Answer>
      ))}
    </AnswersContainer>
  );
};
