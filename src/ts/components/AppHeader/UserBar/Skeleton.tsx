import React from 'react';

import style from './style.scss';

export const AppHeaderUserBarSkeleton: React.FC = () => {
  return (
    <>
      <div className={style.skeletonRect} />
      <div className={style.skeletonRect} />
      <div className={style.skeletonCircle} />
    </>
  );
};
