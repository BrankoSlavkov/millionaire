import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes';

import './index.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
