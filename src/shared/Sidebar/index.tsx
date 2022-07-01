import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarConfig } from './sidebarConfig';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.sidebar_wrapper}>
      <div>
        <div className={style.sidebar_menuI}>
          <li>
            <img src="./img/A.png" className={style.A1} alt="" />
          </li>

          <ul className={style.sidebar_syper_admin}>
            <a href="/" className={style.sidebar_syper}>
              Super admin
            </a>
            <a href="/" className={style.sidebar_admin}>
              Админ-меню
            </a>
          </ul>
        </div>
      </div>
      <ul className={style.sidebar_menu}>
        {sidebarConfig.map((menuItem) => {
          const isActiveClassName = pathname.includes(menuItem.path) ? style.active : '';
          return (
            <Link
              key={menuItem.id}
              to={menuItem.path}
              className={`${isActiveClassName} ${style.sidebar_menu_item}`}>
              <img src="./img/book.png" className={style.book} alt="" />
              <li>{menuItem.name}</li>
            </Link>
          );
        })}
      </ul>
      <div className={style.sidebar_exit}>
        <img src="./img/exit.png" className={style.img} alt="" />

        <a href="/exit" className={style.sidebar_exit_exit}>
          Выход
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
