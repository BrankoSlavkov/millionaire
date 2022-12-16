import React from 'react';
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
  const [isAnswering, setIsAnswering] = React.useState<number | null>(null);

  const answerClickHandler = (index: number) => {
    setIsAnswering(index);

    if (index === correct) {
      setTimeout(goToNext, 3000);
      return;
    }
    // TODO - Handle wrong answer
  };

  React.useEffect(() => {
    startTimer();
    setIsAnswering(null);
  }, [questionId]);

  return (
    <AnswersContainer>
      {answers?.map((answer, index) => (
        <Answer
          key={answer}
          onClick={() => answerClickHandler(index)}
          isCorrect={index === correct}
          isAnswering={
            !Number.isNaN(isAnswering) ? isAnswering === index : !!isAnswering
          }
        >
          {answer}
        </Answer>
      ))}
    </AnswersContainer>
  );
};
