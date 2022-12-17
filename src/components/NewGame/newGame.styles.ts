import styled from 'styled-components';

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
