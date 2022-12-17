import { NewGame } from '../NewGame/NewGame';
import { WinnersContainer } from './winnerContent.styles';

export const WinnerContent = () => {
  return (
    <WinnersContainer>
      <img src="/assets/img/party.webp" alt="Party" />
      <span>Congratulations you are now a millionaire!!!</span>
      <NewGame text="Earn More" />
    </WinnersContainer>
  );
};
