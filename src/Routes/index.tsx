import { createBrowserRouter } from 'react-router-dom';
import { GameOverPage } from '../pages/GameOver';

import { PlayPage } from '../pages/Play';
import { RegisterPage } from '../pages/Register';

export const REGISTER = '/register';
export const PLAY = '/play';
export const GAME_OVER = '/game-over';

export const router = createBrowserRouter([
  {
    path: REGISTER,
    element: <RegisterPage />,
  },
  {
    path: PLAY,
    element: <PlayPage />,
  },
  {
    path: GAME_OVER,
    element: <GameOverPage />,
  },
  {
    path: '*',
    element: <RegisterPage />,
  },
]);
