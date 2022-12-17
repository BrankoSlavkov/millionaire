import { useNavigate } from 'react-router-dom';
import { REGISTER } from '../../routes';

import { ScreenBackground } from '../../styles';
import {
  CenterContainer,
  GameOverText,
  NewGameButton,
} from './gameOver.styles';

export const GameOver = () => {
  const navigate = useNavigate();

  const handleNewGame = () => navigate(REGISTER);

  return (
    <ScreenBackground>
      <CenterContainer>
        <GameOverText>Game Over</GameOverText>
        <NewGameButton onClick={handleNewGame}>New Game</NewGameButton>
      </CenterContainer>
    </ScreenBackground>
  );
};
