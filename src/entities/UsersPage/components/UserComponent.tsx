import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserComponent = () => {
  const { id, title, category } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <input value={id} />
      <input value={title} />
      <input value={category} />
      <button type="button" onClick={() => navigate(-1)}>
        Вернуться назад
      </button>
    </>
  );
};

export default UserComponent;
