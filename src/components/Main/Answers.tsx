import React from 'react';
import { useNavigate } from 'react-router-dom';

import { GAME_OVER } from '../../Routes';
import {
  getCurrentQuestionIndex,
  getIsAnswering,
  setIsAnswering,
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
  const navigate = useNavigate();
  const goToNext = useStore(setNextQuestion);
  const questionId = useStore(getCurrentQuestionIndex);
  const startTimer = useStore(setStartTimer);
  const isAnswering = useStore(getIsAnswering);
  const isAnsweringHandler = useStore(setIsAnswering);

  const answerClickHandler = (index: number) => {
    isAnsweringHandler(index);

    if (index === correct) {
      setTimeout(goToNext, 3000);
      return;
    }

    setTimeout(() => {
      navigate(GAME_OVER, {
        replace: true,
      });
    }, 3000);
  };

  React.useEffect(() => {
    startTimer();
    isAnsweringHandler(null);
  }, [questionId]);

  return (
    <AnswersContainer>
      {answers?.map((answer, index) => (
        <Answer
          disabled={!!isAnswering}
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
