import { Aside } from '../components/Aside/Aside';
import { Main } from '../components/Main/Main';

import styles from '../Styles/play.module.css';

export const Play = () => {
  return (
    <div className={styles.container}>
      <Main />
      <Aside />
    </div>
  );
};
