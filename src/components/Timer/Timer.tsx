import { useEffect, useState } from 'react';

import { useStore, setStopTimer } from '../../store';

import { TimerContainer } from './timer.styles';

export const Timer = () => {
  const [timer, setTimer] = useState(5);
  const stopTimer = useStore(setStopTimer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      stopTimer();
      //TODO - set lose game
    }
  }, [timer]);

  return <TimerContainer>{timer.toString().padStart(2, '0')}</TimerContainer>;
};
