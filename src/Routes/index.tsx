import { createBrowserRouter } from 'react-router-dom';

import { Play } from '../pages/Play';
import { Register } from '../pages/Register';

export const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/play',
    element: <Play />,
  },
  {
    path: '*',
    element: <Register />,
  },
]);
