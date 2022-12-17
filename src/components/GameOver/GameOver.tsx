import { NewGame } from '../NewGame/NewGame';

import { ScreenBackground } from '../../styles';
import { CenterContainer, GameOverText } from './gameOver.styles';

export const GameOver = () => {
  return (
    <ScreenBackground>
      <CenterContainer>
        <GameOverText>Game Over</GameOverText>
        <NewGame />
      </CenterContainer>
    </ScreenBackground>
  );
};
