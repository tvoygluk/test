import React from 'react';
import { ClientReview } from './ClientReview';
import { FractionalGradeBlock } from './FractionalGradeBlock';
import { GradeBlock } from './GradeBlock';

import style from './style.scss';

interface IClientsData {
  id: number;
  clientName: string;
  daysAgoOfLastComment: number;
  rate: number;
  comment: string;
  specialistFullName: string;
  services: string[];
}

const clientsMocks: IClientsData[] = [
  {
    id: 1,
    clientName: 'Екатерина',
    daysAgoOfLastComment: 24,
    rate: 4,
    comment: 'Очень понравился салон красоты смотрится просто изумительно всю жизнь буду ходить именно сюда и рекомендовать каждому встречному',
    specialistFullName: 'Анастасия Макеева',
    services: ['Маникюр', 'Педикюр'],
  },
  {
    id: 2,
    clientName: 'Виктория',
    daysAgoOfLastComment: 20,
    rate: 5,
    comment: 'Очень понравился салон красоты смотрится просто изумительно всю жизнь буду ходить именно сюда и рекомендовать каждому встречному',
    specialistFullName: 'Анастасия Макеева',
    services: ['Маникюр', 'Педикюр', 'Стиржка', 'Покрас'],
  },
];

interface IReviewData {
  mainGrade: string;
  mainGradeInPercent: number;
  reviewAmount: number;
}

const reviewMocks: IReviewData = {
  mainGrade: '4.0',
  mainGradeInPercent: 91,
  reviewAmount: 126,
};

interface IReviewProps {
  clientData: IClientsData[];
  reviewData: IReviewData;
}

const gradeBlockData = [
  {
    title: 'Атмосфера',
    value: 4,
  },
  {
    title: 'Чистота',
    value: 5,
  },
  {
    title: 'Сотрудники',
    value: 5,
  },
];

export const Reviews: React.FC<IReviewProps> = ({
  clientData = clientsMocks,
  reviewData = reviewMocks,
}) => {
  return (
    <section className={style.root}>
      <section>
        <h2 className={style.title}>Отзывы</h2>
        <section className={style.grades}>
          <div className={style.commonInfo}>
            <span className={style.mainGrade}>{reviewData.mainGrade}</span>
            <div className={style.starGrade}>
              <FractionalGradeBlock
                commonRate={reviewData.mainGradeInPercent}
              />
              <span className={style.comments}>
                Отзывов:
                {' '}
                {reviewData.reviewAmount}
              </span>
            </div>
          </div>

          <section className={style.gradeBlocks}>
            {gradeBlockData.map((el) => (
              <GradeBlock
                key={el.title}
                title={el.title}
                value={el.value}
                className={style.outStyle}
              />
            ))}
          </section>
        </section>
        {clientData.map((el) => (
          <ClientReview
            key={el.id}
            clientName={el.clientName}
            daysAgoOfLastComment={el.daysAgoOfLastComment}
            rate={el.rate}
            comment={el.comment}
            specialistFullName={el.specialistFullName}
            services={el.services}
          />
        ))}
      </section>
    </section>
  );
};
