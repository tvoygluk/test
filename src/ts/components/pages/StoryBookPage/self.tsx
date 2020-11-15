import React from 'react';

import style from './style.scss';
import { Reviews } from 'common/Reviews';

const COLORS: string[] = [
  'white',
  'red',
  'pink',
  'black',
  'black-alpha-01',
  'gray-lightest',
  'gray-light',
  'gray',
  'mercury-light',
  'mercury',
  'mercury-dark',
  'primary-lightest',
  'primary-light',
  'primary',
  'primary-dark',
  'mint-lightest',
  'mint-light',
  'mint',
  'mint-dark',
  'mint-darkest',
  'blueberry-lightest',
  'blueberry-light',
  'blueberry',
  'blueberry-dark',
  'blueberry-darkest',
  'blackberry-lightest',
  'blackberry-light',
  'blackberry',
  'blackberry-dark',
  'blackberry-darkest',
];

export const StoryBookPage: React.FC = () => {
  return (
    <main className={style.root}>
      <div className={style.container}>
        <h1 className={style.heading}>Story book</h1>
        <section className={style.colors}>
          <h2 className={style.title}>Site colors</h2>
          <ul className={style.colorList}>
            {COLORS.map((item) => (
              <li
                className={style.colorItem}
                key={item}
              >
                <div className={style.square} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <Reviews />
      </div>
    </main>
  );
};
