import { useState } from 'react';
import { DropdownMenu } from '../../DropdownMenu/DropdownMenu';
import styles from '../styles.module.css';
export const Navigation = ({dropDownMenu,name, link, id,}) => {

  const [isMouseOnButton,setIsMouseOnButton]=useState(-1);

  return (
            <li onMouseEnter={() => setIsMouseOnButton(1)} 
            onMouseLeave={() => setIsMouseOnButton(-1)}>
              <a className={styles.link} href={link}>{name}</a>
              <DropdownMenu isMouseOnButton={isMouseOnButton} dropDownMenu={dropDownMenu}/>
              </li>
  );
};