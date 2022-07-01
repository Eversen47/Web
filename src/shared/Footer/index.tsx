import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_left}>
        <img src="./img/logotip.png" alt="" />

        <h3>СТИКЕР</h3>

        <h4>Доска объявлений </h4>
      </div>
      <div className={style.footer_right}>
        <img src="./img/Prof.png" alt="" />
        <h3>© ООО «Доска диджитал», 2022</h3>
      </div>
    </div>
  );
};

export default Footer;
