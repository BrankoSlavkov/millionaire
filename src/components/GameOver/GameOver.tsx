import { ScreenBackground } from '../../styles';
import { CenterContainer } from './gameOver.styles';

export const GameOver = () => {
  return (
    <ScreenBackground>
      <CenterContainer>
        <span>Game Over</span>
      </CenterContainer>
    </ScreenBackground>
  );
};
