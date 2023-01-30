import styles from './styles.module.css';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__info}>
        <h3>Социальные сети</h3>
      </div>

      <div className={styles.footer__help}>
      <h3>Поддержка</h3>
      </div>

      <div className={styles.footer__help}>
      <h3>О нас</h3>
      </div>
    </footer>
  );
};