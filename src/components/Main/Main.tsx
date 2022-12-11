import {
  Answer,
  AnswersContainer,
  MainContainer,
  Question,
  Questions,
} from './main.styles';

export const Main = () => {
  return (
    <MainContainer>
      <Questions>
        <Question>
          On a radio, stations are changed by using what control?
        </Question>
        <AnswersContainer>
          <Answer>Tuning</Answer>
          <Answer>Volume</Answer>
          <Answer>Bass</Answer>
          <Answer>Treble</Answer>
        </AnswersContainer>
      </Questions>
    </MainContainer>
  );
};
