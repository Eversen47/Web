import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { IUsers } from '../../../interfaces/IUsers';
import Pagination from '../../../shared/Pagination';
import { createUserAction } from '../../../store/pages/UsersPage/actions';
import style from '../UsersPage.module.scss';
import UserCard from './UserCard';

interface IProps {
  usersDataAttr: IUsers[];
}

const UsersPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');

  const currentPageNumber = new URLSearchParams(search).get('page');

  const paginatedUserData = usersDataAttr.slice(
    (Number(currentPageNumber) - 1) * 6,
    Number(currentPageNumber) * 6
  );

  const handleFormSumdit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser = {
      id: usersDataAttr.length + 1,
      title: titleValue,
      category: categoryValue,
    };
    dispatch(createUserAction(newUser));
  };

  return (
    <div>
      <div className={style.user_list}>
        {paginatedUserData.length ? (
          paginatedUserData.map((user) => {
            const { id, title, category } = user;
            return (
              <React.Fragment key={`UserId:${id}`}>
                <UserCard id={id || 0} title={title} category={category} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Пользователи не найдены.</div>
        )}

        <Pagination limit={3} itemsAmount={usersDataAttr.length} />
        <form className={style.create_user} onSubmit={handleFormSumdit}>
          <input
            type="text"
            placeholder="Товар"
            value={titleValue}
            onChange={(event) => setTitleValue(event.target.value)}
          />
          <input
            type="text"
            placeholder="категория"
            value={categoryValue}
            onChange={(event) => setCategoryValue(event.target.value)}
          />
          <button type="submit">Добавить товар</button>
        </form>
      </div>
    </div>
  );
};

export default UsersPageComponent;
