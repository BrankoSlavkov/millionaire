import { WinnerContent } from '../components/WinnerContent/WinnerContent';
import { ScreenBackground, ScreenContainer } from '../styles';

export const WinnerPage = () => {
  return (
    <ScreenContainer>
      <ScreenBackground>
        <WinnerContent />
      </ScreenBackground>
    </ScreenContainer>
  );
};
