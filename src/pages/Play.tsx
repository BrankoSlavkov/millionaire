import { Aside } from '../components/Aside/Aside';
import { Main } from '../components/Main/Main';

import { PlayContainer } from '../Styles/play.styles';

export const Play = () => {
  return (
    <PlayContainer>
      <Main />
      <Aside />
    </PlayContainer>
  );
};
