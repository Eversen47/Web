import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { IUsers } from '../../../interfaces/IUsers';
import Pagination from '../../../shared/Pagination';
import style from '../UsersPage.module.scss';
import UserCard from './UserCard';

interface IProps {
  usersDataAttr: IUsers[];
}

const UsersPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  const { search } = useLocation();

  const currentPageNumber = new URLSearchParams(search).get('page');

  const paginatedUserData = usersDataAttr.slice(
    (Number(currentPageNumber) - 1) * 6,
    Number(currentPageNumber) * 6
  );

  return (
    <div>
      <div className={style.user_list}>
        {paginatedUserData.length ? (
          paginatedUserData.map((user) => {
            const { id, title, category } = user;
            return (
              <React.Fragment key={`UserId:${id}`}>
                <UserCard id={id} title={title} category={category} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Пользователи не найдены.</div>
        )}

        <Pagination limit={3} itemsAmount={usersDataAttr.length} />
        <form className={style.create_user} onSubmit={() => console.log('hello')}>
          <input type="text" placeholder="Введите" />
          <input type="email" placeholder="email" />
          <button type="submit">Сщздать пользователя</button>
        </form>
      </div>
    </div>
  );
};

export default UsersPageComponent;
