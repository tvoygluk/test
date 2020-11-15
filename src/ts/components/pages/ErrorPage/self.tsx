import React from 'react';

import style from './style.scss';

export const ErrorPage: React.FC = () => {
  return (
    <main className={style.root}>
      <div className={style.container}>
        <h2>Ошибка 404</h2>
        <p>Нет такой страницы!</p>
      </div>
    </main>
  );
};
