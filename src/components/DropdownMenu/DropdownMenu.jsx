import styles from './styles.module.css';
import React from 'react';
export const DropdownMenu = ({dropDownMenu, setIsMouseOnMenu}) => {
  const wrapperRef = React.createRef();
  const handleHover = () => {
    setIsMouseOnMenu(1);
    const wrapper = wrapperRef.current;
    console.log(wrapper);
    wrapper.classList.toggle('styles_isMenuOpen__MPjNH')
  }
  return (
          <div ref={wrapperRef} onMouseLeave={() => setIsMouseOnMenu(-1)} onMouseEnter={()=> handleHover()} className={styles.menu} 
          style={{opacity: 1}}>
            {dropDownMenu.map(el => <div>{el.item}</div>)}
          </div>
  );
};