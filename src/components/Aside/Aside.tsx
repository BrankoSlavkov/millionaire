import styles from './aside.module.css';

const prices = [
  100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
  250000, 500000, 1000000,
];

export const Aside = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {prices.map((price, index) => (
          // className={styles.active}
          <li key={price}>
            <span>{index + 1}</span>
            <span className={styles.price}>
              $ {price.toLocaleString('de-DE')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
