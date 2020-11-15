import React from 'react';
import { Grade } from '../../Grade';
import classNames from 'classnames';

import style from './style.scss';

interface IGradeBlockProps {
  title?: string;
  value: number;
  onChange?: (value: number) => void;
  className?: string;
}

export const GradeBlock: React.FC<IGradeBlockProps> = ({
  title,
  value,
  onChange,
  className,
}) => {
  return (
    <div
      className={classNames(
        style.root,
        className,
      )}
    >
      <span className={style.title}>{title}</span>
      <Grade
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
