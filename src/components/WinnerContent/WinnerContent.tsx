import { getPlayer, useStore } from '../../store';

import { NewGame } from '../NewGame/NewGame';
import { WinnersContainer } from './winnerContent.styles';

export const WinnerContent = () => {
  const player = useStore(getPlayer);

  return (
    <WinnersContainer>
      <img src="/assets/img/party.webp" alt="Party" />
      <p>
        Congratulations
        <span> {player} </span>
        you are now a millionaire!!!
      </p>
      <NewGame text="Earn More" />
    </WinnersContainer>
  );
};
