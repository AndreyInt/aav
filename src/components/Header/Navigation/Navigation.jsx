import styles from '../styles.module.css';
export const Navigation = ({setIsMouseOnButton,name, link, id,setIdAcriveDropDownMenu}) => {
  return (
            <li onMouseEnter={() => {
              setIsMouseOnButton(1);
              setIdAcriveDropDownMenu(id)}} onMouseLeave={() => setIsMouseOnButton(-1)}><a className={styles.link} href={link}>{name}</a></li>
  );
};