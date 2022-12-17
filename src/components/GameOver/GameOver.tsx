import { ScreenBackground } from '../../Styles';
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
