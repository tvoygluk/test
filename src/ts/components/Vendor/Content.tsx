import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { IconButton } from 'common/IconButton';
import { HomeIcon, ShareIcon, StarIcon } from 'common/icons';
import { Image } from 'common/Image';
import { LikeIconButton } from 'components/LikeIconButton';
import type { IVendor } from 'store/vendor';
import { ROUTES } from 'ts/constants';
import mockedServices from 'ts/mocks/vendor/services';

import { VendorCheckIn } from './CheckIn';
import { VendorGeography } from './Geography';
import { VendorService } from './Service';
import type { VendorHeadingLevelType } from './types';

import img1x1 from './img/vendor-1@1x.jpg';
import img1x2 from './img/vendor-1@2x.jpg';
import img1x3 from './img/vendor-1@3x.jpg';
import style from './style.scss';

interface IVendorContentProps {
  data: IVendor;
  headingId?: string;
  headingLevel?: VendorHeadingLevelType;
}

export const VendorContent: React.FC<IVendorContentProps> = ({
  data,
  headingId,
  headingLevel,
}) => {
  const {
    address,
    distance,
    geoPositionLatitude,
    geoPositionLongitude,
    id,
    name,
    notes,
    ratingCount,
    services,
  } = data;

  const [hasLike, setHasLike] = useState(false);

  const handleLikeClick = () => {
    setHasLike((prevState) => !prevState);
  };

  const geographyData = {
    address,
    distance,
    geoPositionLatitude,
    geoPositionLongitude,
  };

  const renderLink = (children: React.ReactNode): React.ReactNode => (
    <Link className={style.link} to={`${ROUTES.VENDOR_ROOT}/${id}`}>
      {children}
    </Link>
  );

  const renderHeading = () => {
    if (!headingLevel) {
      return (
        <p className={style.title}>
          {renderLink(name)}
        </p>
      );
    }

    if (headingLevel === 2) {
      return (
        <h2 className={style.title} id={headingId}>
          {renderLink(name)}
        </h2>
      );
    }

    return (
      <h3 className={style.title} id={headingId}>
        {renderLink(name)}
      </h3>
    );
  };

  const serviceList = services.length > 0 ? services : mockedServices;

  return (
    <>
      {renderLink(
        <Image
          className={style.image}
          alt={name}
          srcList={[img1x1, img1x2, img1x3]}
          loading="lazy"
          width="300"
          height="165"
        />,
      )}

      <div className={style.header}>
        {renderHeading()}

        <div className={style.stars} aria-label={`Рейтинг: ${ratingCount}`}>
          <span className={style.starCount} aria-hidden="true">
            {ratingCount}
          </span>
          <StarIcon noDefaultColor={false} />
        </div>

        <span className={style.reviews}>
          {`Число отзывов: ${notes?.length ?? 0}`}
        </span>

        <HomeIcon className={style.home} />

        <LikeIconButton
          className={style.like}
          pressed={hasLike}
          onClick={handleLikeClick}
        />

        <IconButton
          aria-label="Поделиться"
          onClick={() => {
            console.log('Share clicked');
          }}
        >
          <ShareIcon />
        </IconButton>
      </div>

      <VendorGeography className={style.geography} data={geographyData} />

      <div className={style.services}>
        <p className={style.caption}>Услуги</p>
        <ul className={style.list}>
          {serviceList.map((item, i) => (
            <VendorService
              key={i}
              className={style.service}
              data={item}
            />
          ))}
        </ul>
      </div>

      <VendorCheckIn className={style.checkin} />
    </>
  );
};
