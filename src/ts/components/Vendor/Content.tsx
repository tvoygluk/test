import React, { useState } from 'react';
import { noop } from 'lodash';
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

import img1x1 from './img/vendor-1@1x.jpg';
import img1x2 from './img/vendor-1@2x.jpg';
import img1x3 from './img/vendor-1@3x.jpg';
import innerImg from './img/vendor-inner-1.png';
import style from './style.scss';

interface IVendorContentProps {
  data: IVendor;
  headingId?: string;
  isCheckInExpaded?: boolean;
  isInner?: boolean;
  onCheckInToggle?: () => void;
}

export const VendorContent: React.FC<IVendorContentProps> = ({
  data,
  headingId,
  isCheckInExpaded = false,
  isInner = false,
  onCheckInToggle = noop,
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

  const renderLink = (children: React.ReactNode) => (
    <Link className={style.link} to={`${ROUTES.VENDOR_ROOT}/${id}`}>
      {children}
    </Link>
  );

  const renderImage = () => {
    const image = (
      <Image
        className={style.image}
        alt={name}
        srcList={srcList}
        loading="lazy"
        width="300"
        height="165"
      />
    );

    if (isInner) {
      return image;
    }

    return renderLink(image);
  };

  const renderHeading = () => {
    if (isInner) {
      return <p className={style.title}>{name}</p>;
    }

    return (
      <h3 className={style.title} id={headingId}>
        {renderLink(name)}
      </h3>
    );
  };

  const serviceList = services.length > 0 ? services : mockedServices;

  const srcList = isInner ? [innerImg] : [img1x1, img1x2, img1x3];

  return (
    <>
      {renderImage()}

      <div className={style.header}>
        {renderHeading()}

        <div className={style.stars} aria-label={`Рейтинг: ${ratingCount}`}>
          <span className={style.starCount} aria-hidden="true">
            {ratingCount}
          </span>
          <StarIcon noDefaultColor={false} />
        </div>

        <span className={style.reviews}>
          {`Отзывов: ${notes?.length ?? 0}`}
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
        {isInner && (
          <h2 className={style.servicesCaption}>Услуги</h2>
        )}

        <ul className={style.list}>
          {serviceList.map((item, i, arr) => (
            <li
              key={item.id}
              className={style[i === arr.length - 1 ? 'lastService' : 'service']}
            >
              <VendorService data={item} isExtended={isInner} />
            </li>
          ))}
        </ul>
      </div>

      {!isInner && (
        <VendorCheckIn
          isExpanded={isCheckInExpaded}
          onToggle={onCheckInToggle}
        />
      )}
    </>
  );
};
