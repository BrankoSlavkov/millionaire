import styled from 'styled-components';

export const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  max-width: 55rem;
  margin: 0 auto;
`;
CenterContainer.displayName = 'CenterContainer.styled';

export const GameOverText = styled.span`
  font-size: 8rem;
  font-weight: 700;
  letter-spacing: 1rem;
`;
GameOverText.displayName = 'GameOverText.styled';

export const NewGameButton = styled.button`
  width: 50%;
  padding: 1.5rem;
  font-size: 2.4rem;
  border-radius: 10px;
  background: linear-gradient(to right, var(--very-dark-blue), #000);
  color: #fff;
  border: none;

  &:hover {
    background: linear-gradient(
      to right,
      var(--dark-blue),
      var(--very-dark-blue)
    );
  }
`;
NewGameButton.displayName = 'NewGameButton.styled';
