import React from 'react';
import { useNavigate } from 'react-router-dom';

import { setPlayer, useStore } from '../../store';
import { PLAY } from '../../Routes';

import {
  PlayButton,
  RegisterFormElement,
  RegisterInput,
} from './registerForm.styles';
import { ScreenBackground } from '../../Styles';

export const RegisterForm = () => {
  const [name, setName] = React.useState('');
  const setPlayerHandler = useStore(setPlayer);
  const navigate = useNavigate();

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim().length) {
      alert('PROVIDE A NAME');
      return;
    }

    setPlayerHandler(name);
    navigate(PLAY);
  };

  return (
    <ScreenBackground>
      <RegisterFormElement onSubmit={formHandler}>
        <RegisterInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <PlayButton type="submit">Play</PlayButton>
      </RegisterFormElement>
    </ScreenBackground>
  );
};
