import { Question } from '../../types';
import { Answer, AnswersContainer } from './main.styles';

type AnswersProps = {
  answers?: Question['content'];
  correct?: Question['correct'];
};

export const Answers = ({ answers, correct }: AnswersProps) => {
  return (
    <AnswersContainer>
      {answers?.map((answer) => (
        <Answer key={answer}>{answer}</Answer>
      ))}
    </AnswersContainer>
  );
};
