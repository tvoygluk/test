import React from 'react';
import { Service } from '../../Service';
import { GradeBlock } from '../GradeBlock';

import style from './style.scss';

interface IClientReviewProps {
  clientName: string;
  daysAgoOfLastComment: number;
  rate: number;
  comment: string;
  specialistFullName: string;
  services: string[];
}

export const ClientReview: React.FC<IClientReviewProps> = ({
  clientName,
  daysAgoOfLastComment,
  rate,
  comment,
  specialistFullName,
  services,
}) => {
  return (
    <article className={style.root}>
      <GradeBlock
        value={rate}
        className={style.stars}
      />
      <span className={style.textReview}>
        {comment}
      </span>
      <div className={style.clientInfo}>
        <span className={style.clientName}>{clientName}</span>
        <span>
          {daysAgoOfLastComment}
          {' '}
          дней
          {' '}
          назад
        </span>
      </div>
      <div className={style.masterInfo}>
        <span>
          Мастер
          {' '}
          {specialistFullName}
        </span>
      </div>
      <div className={style.wrapServices}>
        {services.map((element) => (
          <Service
            key={element}
            service={element}
            className={style.service}
          />
        ))}
      </div>
    </article>
  );
};
