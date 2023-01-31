import { useState } from 'react';
import { DropdownMenu } from '../../DropdownMenu/DropdownMenu';
import { Navigation } from '../Navigation/Navigation';
import styles from '../styles.module.css';

export const Navigations = ({headerNav}) => {
  const [idAcriveDropDownMenu,setIdAcriveDropDownMenu]=useState(-1);

  const [isMouseOnMenu,setIsMouseOnMenu]=useState(-1);

  const [isMouseOnButton,setIsMouseOnButton]=useState(-1);

  return (
          <ul className={styles.header__list_link}>
          {headerNav.map( el=> <Navigation setIsMouseOnButton={setIsMouseOnButton} setIsMouseOnMenu={setIsMouseOnMenu} setIdAcriveDropDownMenu={setIdAcriveDropDownMenu} id={el.id} name={el.name} link={el.link}/>)}
            <li><button className={styles.header__button}> </button></li>
            {(isMouseOnButton>=0 || isMouseOnMenu>=0) ? <DropdownMenu setIsMouseOnMenu={setIsMouseOnMenu} setAcriveDropDownMenu={setIdAcriveDropDownMenu} dropDownMenu={headerNav[idAcriveDropDownMenu].dropDownMenu}/> : undefined}
          </ul>
  );
};