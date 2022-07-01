import React from 'react';

import style from './Info.module.scss';

const Info = () => {
  return (
    <div>
      <div className={style.nav}>
        <div className={style.nav_ad}>Объявление</div>
        <a href="test_page">
          <img src="./img/cross.png" alt="" />
        </a>
      </div>

      <hr className={style.hr} />
      <div>
        <input className={style.test_input} placeholder="Найти товар" />
      </div>
      <div className={style.table}>
        <ul className={style.list_group_info}>
          <p className={style.title}>
            <div className={style.nameTab}>
              <li>Название объявления</li>

              <img src="./img/grup.png" alt="" />
            </div>
          </p>
          <p>Категория</p>
          <p>Дата публикации</p>
          <p>Публикация</p>
        </ul>
      </div>
    </div>
  );
};

export default Info;
