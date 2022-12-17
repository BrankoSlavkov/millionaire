import styled from 'styled-components';
import { NewGameButton } from '../NewGame/newGame.styles';

export const WinnersContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  & img {
    margin-top: -2rem;
  }

  & span {
    font-size: 4rem;
    letter-spacing: 3px;
    font-weight: 300;
  }

  ${NewGameButton} {
    width: auto;
    padding: 2rem 10rem;
  }
`;
WinnersContainer.displayName = 'WinnersContainer.styled';
