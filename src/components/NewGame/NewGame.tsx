import { useNavigate } from 'react-router-dom';

import { REGISTER } from '../../routes';

import { NewGameButton } from './newGame.styles';

type NewGameProps = {
  text?: string;
};

export const NewGame = ({ text }: NewGameProps) => {
  const navigate = useNavigate();

  const handleNewGame = () => navigate(REGISTER);

  return (
    <NewGameButton onClick={handleNewGame}>{text ?? 'New Game'}</NewGameButton>
  );
};
