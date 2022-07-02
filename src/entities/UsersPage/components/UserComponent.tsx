import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserComponent = () => {
  const { id, title, category } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
      <div>{category}</div>
      <button type="button" onClick={() => navigate(-1)}>
        Вернуться назад
      </button>
    </>
  );
};

export default UserComponent;
