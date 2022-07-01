import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <button type="button" onClick={() => navigate(-1)}>
        Вернуться назад
      </button>
      <div>Редактировать</div>
    </>
  );
};

export default UserComponent;
