import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import style from '../UsersPage.module.scss';

interface IProps {
  id: number;
  title: string;
  category: string;
}

const UserCard: FC<IProps> = ({ id, title, category }) => {
  return (
    <div className={style.content}>
      <div className={style.post}>
        <p className={style.postTitle}>{title}</p>
        <p className={style.postCategory}>{category}</p>
        <p>12 апреля 2022 </p>
        <p>Да</p>
      </div>

      <nav className={style.menu}>
        <ul className={style.menu_list}>
          <ul className={style.icon}>
            <li>
              <img src="./img/dots.png" width="20" height="20" alt="" />
            </li>
            <ul className={style.subMenu_list}>
              <ul className={style.subMenu_list_1}>
                <img src="./img/eye.png" alt="" />
                <li className={style.subMenu_link}>Просмотреть</li>
              </ul>

              <ul className={style.subMenu_list_2}>
                <img src="./img/pan.png" alt="" />
                <a href="users_page/:id" className={style.subMenu_link}>
                  Редактировать
                </a>
              </ul>

              <ul className={style.subMenu_list_3}>
                <img src="./img/trash.png" alt="" />
                <li className={style.subMenu_link}>Удалить</li>
              </ul>
            </ul>
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default UserCard;
