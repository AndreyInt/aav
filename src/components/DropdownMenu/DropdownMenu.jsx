import styles from './styles.module.css';
import React from 'react';
import cx from 'classnames';
export const DropdownMenu = ({isMouseOnButton,dropDownMenu}) => {

  return (
          <div className={ cx(styles.menu, isMouseOnButton>0 ? styles.isMenuOpen : styles.menu)}>
            {dropDownMenu.map(el => <div>{el.item}</div>)}
          </div>
  );
};