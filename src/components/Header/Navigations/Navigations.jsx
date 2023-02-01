import { Navigation } from '../Navigation/Navigation';
import styles from '../styles.module.css';

export const Navigations = ({headerNav}) => {
  return (
          <ul className={styles.header__list_link}>
          {headerNav.map( el=> <Navigation dropDownMenu={el.dropDownMenu} id={el.id} name={el.name} link={el.link}/>)}
            <li><button className={styles.header__button}> </button></li>
          </ul>
  );
};