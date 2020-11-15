import React from 'react';

import style from './style.scss';

export const LoadingPage: React.FC = () => {
  return (
    <main className={style.root}>
      <p>Загружаем приложение...</p>
    </main>
  );
};
