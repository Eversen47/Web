import React from 'react';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header_left}>
        <img src="./img/logotip.png" alt="" />
        <h3>СТИКЕР</h3>
      </div>
      <div className={style.header_right}>
        <img src="./img/Prof.png" alt="" />
        <h3>Профиль</h3>
      </div>
    </div>
  );
};

export default Header;
