import styles from './styles.module.css';
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__container}>
          <img src="./logo.png" alt="Лого" className={styles.header__logo}/>
          <ul className={styles.header__list_link}>
            <li><a className={styles.link} href='http://localhost:3004/'>БРЕНДЫ</a></li>
            <li><a className={styles.link} href='http://localhost:3004/'>МУЖСКОЕ</a></li>
            <li><a className={styles.link} href='http://localhost:3004/'>ЖЕНСКОЕ</a></li>
            <li><a className={styles.link} href='http://localhost:3004/'>ДЕТСКОЕ</a></li>
            <li><button className={styles.header__button}> </button></li>
          </ul>
        </div>
      </div>
    </header>
  );
};