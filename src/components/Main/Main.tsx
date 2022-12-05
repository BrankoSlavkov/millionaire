import styles from './main.module.css';

export const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.questions__container}>
        <p className={styles.question}>
          On a radio, stations are changed by using what control?
        </p>
        <div className={styles.answers__container}>
          <button className={styles.answer}>Tuning</button>
          <button className={styles.answer}>Volume</button>
          <button className={styles.answer}>Bass</button>
          <button className={styles.answer}>Treble</button>
        </div>
      </div>
    </div>
  );
};
