import React from 'react';
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';

import { GAME_OVER } from '../../routes';
import {
  getCurrentQuestionIndex,
  getIsAnswering,
  setIsAnswering,
  setNextQuestion,
  setStartTimer,
  useStore,
} from '../../store';
import { Question } from '../../types';

import correctAnswer from '/assets/sounds/correct.mp3';
import wrongAnswer from '/assets/sounds/wrong.mp3';

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
  const [playCorrect] = useSound(correctAnswer, {
    interrupt: true,
  });
  const [playWrong] = useSound(wrongAnswer, {
    interrupt: true,
  });

  const answerClickHandler = (index: number) => {
    isAnsweringHandler(index);

    if (index === correct) {
      setTimeout(() => {
        playCorrect();
        setTimeout(goToNext, 2_000);
      }, 1_500);

      return;
    }

    setTimeout(() => {
      playWrong();
      setTimeout(() => {
        navigate(GAME_OVER, {
          replace: true,
        });
      }, 2_000);
    }, 1_500);
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
