import React from 'react';

import { Button } from 'common/Button';
import { Image } from 'common/Image';

import style from './style.scss';
import image1x1 from './img/discount-1@1x.jpg';
import image1x2 from './img/discount-1@2x.jpg';
import image1x3 from './img/discount-1@3x.jpg';
import image2x1 from './img/discount-2@1x.jpg';
import image2x2 from './img/discount-2@2x.jpg';
import image2x3 from './img/discount-2@3x.jpg';

interface IMockedImages {
  [assetName: string]: string[];
}

interface IDiscount {
  amount: number;
  title: string;
}

interface IDiscountsItemProps {
  className?: string;
  discount: IDiscount;
}

const mockedImages: IMockedImages = {
  'ARTI20': [
    image1x1,
    image1x2,
    image1x3,
  ],
  'ARTI40': [
    image2x1,
    image2x2,
    image2x3,
  ],
};

export const DiscountsItem: React.FC<IDiscountsItemProps> = ({ className, discount }) => {
  const { amount, title } = discount;

  return (
    <li className={className}>
      <Button className={style.root}>
        <span className={style.description}>
          <span className={style.amount}>{`Скидка ${amount}%`}</span>
          <span className={style.title}>{title}</span>
        </span>
        <Image
          className={style.image}
          alt={`Скидка в салоне ${title}`}
          loading="lazy"
          srcList={mockedImages[title]}
          width="184"
          height="114"
        />
      </Button>
    </li>
  );
};
