import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getPlayer, useStore } from '../store';

import { Aside } from '../components/Aside/Aside';
import { Main } from '../components/Main/Main';

import { REGISTER } from '../ ';

import { ScreenContainer } from '../sstyles';

export const PlayPage = () => {
  const player = useStore(getPlayer);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!player.length) navigate(REGISTER);
  }, []);

  return (
    <ScreenContainer>
      <Main />
      <Aside />
    </ScreenContainer>
  );
};
