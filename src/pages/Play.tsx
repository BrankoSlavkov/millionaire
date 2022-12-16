import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getPlayer, useStore } from '../store';

import { Aside } from '../components/Aside/Aside';
import { Main } from '../components/Main/Main';

import { REGISTER } from '../Routes';

import { ScreenContainer } from '../Styles';

export const Play = () => {
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
