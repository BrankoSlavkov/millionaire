import { createBrowserRouter } from 'react-router-dom';
import { GameOver } from '../pages/GameOver';

import { Play } from '../pages/Play';
import { Register } from '../pages/Register';

export const REGISTER = '/register';
export const PLAY = '/play';
export const GAME_OVER = '/game-over';

export const router = createBrowserRouter([
  {
    path: REGISTER,
    element: <Register />,
  },
  {
    path: PLAY,
    element: <Play />,
  },
  {
    path: GAME_OVER,
    element: <GameOver />,
  },
  {
    path: '*',
    element: <Register />,
  },
]);
