import { Navigations } from './Navigations/Navigations';
import styles from './styles.module.css';

export const Header = ({headerNav}) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <div className={styles.header__container}>
          <img src="./logo.png" alt="Лого" className={styles.header__logo}/>
          <Navigations headerNav={headerNav}/>
        </div>
      </div>
    </header>
  );
};