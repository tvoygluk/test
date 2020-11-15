import React from 'react';

import style from './style.scss';

interface IFractionalGradeBlockProps {
  commonRate: number;
}

export const FractionalGradeBlock: React.FC<IFractionalGradeBlockProps> = ({ commonRate = 91 }) => {
  let blockWidth = 0;

  if (commonRate <= 0) {
    blockWidth = 0;
  } else if (commonRate >= 100) {
    blockWidth = 100;
  } else {
    blockWidth = commonRate;
  }

  return (
    <div className={style.root}>
      <div className={style.fixedBg} />
      <div
        className={style.moovedBg}
        style={{
          width: `${blockWidth}%`,
        }}
      />
    </div>
  );
};
