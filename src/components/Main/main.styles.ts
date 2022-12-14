import styled, { css } from 'styled-components';

const questionAnswerCommon = css`
  border: 3px solid var(--blue);
  border-radius: 20px;
  user-select: none;
  letter-spacing: 0.7px;
`;

export const MainContainer = styled.main`
  max-width: 75%;
  flex: 1;
  background: linear-gradient(to bottom, #0000, var(--very-dark-blue)),
    url('/src/assets/img/bg.jpg') center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
MainContainer.displayName = 'MainContainer.styled';

export const Questions = styled.div`
  max-width: 124rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 6rem;
  margin-bottom: 6rem;

  @media only screen and (max-width: 90em) {
    row-gap: 4rem;
  }
`;
Questions.displayName = 'Questions.styled';

export const Question = styled.p`
  ${questionAnswerCommon}
  background: linear-gradient(to bottom, #000, var(--very-dark-blue));
  padding: 2.2rem 10rem;
  font-size: 2.7rem;
  text-align: center;
`;
Question.displayName = 'Question.styled';

export const AnswersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 3rem 3.5rem;
`;
AnswersContainer.displayName = 'AnswersContainer.styled';

export const Answer = styled.button`
  ${questionAnswerCommon}
  width: 100%;
  padding: 1.5rem 5rem;
  text-align: center;
  font-size: 2.3rem;
  color: inherit;
  &:nth-child(even) {
    background: linear-gradient(to right, var(--very-dark-blue), #000);
    &:hover {
      background: linear-gradient(to right, var(--dark-blue) 35%, #000);
    }
  }

  &:nth-child(odd) {
    background: linear-gradient(to right, #000, var(--very-dark-blue));
    &:hover {
      background: linear-gradient(to right, #000, var(--dark-blue) 75%);
    }
  }

  &.active {
    background-image: none;
    border-color: var(--dark-blue);
    background-color: var(--dark-blue);
  }
`;
Answer.displayName = 'Answer.styled';
