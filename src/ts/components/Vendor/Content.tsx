import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'common/Button';
import { IconButton } from 'common/IconButton';
import { HomeIcon, ShareIcon, StarIcon } from 'common/icons';
import { Image } from 'common/Image';
import { LikeIconButton } from 'components/LikeIconButton';
import type { IVendor } from 'store/vendor';
import { ROUTES } from 'ts/constants';
import mockedServices from 'ts/mocks/vendor/services';

import { VendorCheckIn } from './CheckIn';
import { VendorGeography } from './Geography';
import { VendorServiceList } from './ServiceList';

import img1x1 from './img/vendor-1@1x.jpg';
import img1x2 from './img/vendor-1@2x.jpg';
import img1x3 from './img/vendor-1@3x.jpg';
import innerImg from './img/vendor-inner-1.png';

import style from './style.scss';

const SERVICE_PREVIEW_LIST_LENGTH = 3;

interface IVendorContentProps {
  data: IVendor;
  headingId?: string;
  isBrief?: boolean;
}

// TODO: maybe extract header to VendorHeader component

export const VendorContent: React.FC<IVendorContentProps> = ({
  data,
  headingId,
  isBrief = false,
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

  const [isCheckInExpanded, setIsCheckInExpanded] = useState(false);
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

  const renderLink = (linkContent: React.ReactNode) => (
    <Link className={style.link} to={`${ROUTES.VENDOR_ROOT}/${id}`}>
      {linkContent}
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

    if (isBrief) {
      return renderLink(image);
    }

    return image;
  };

  const renderHeading = () => {
    if (isBrief) {
      return (
        <h3 className={style.title} id={headingId}>
          {renderLink(name)}
        </h3>
      );
    }

    return <h1 className={style.title}>{name}</h1>;
  };

  const serviceList = services.length > 0 ? services : mockedServices;
  const servicePreviewList = serviceList.slice(0, SERVICE_PREVIEW_LIST_LENGTH);

  const srcList = isBrief ? [img1x1, img1x2, img1x3] : [innerImg];

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

        <HomeIcon className={style.headerIcon} />

        <LikeIconButton
          className={style.headerIcon}
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

      <div>
        {!isBrief && (
          <h2 className={style.caption}>Услуги</h2>
        )}

        <VendorServiceList list={servicePreviewList} isBrief={isBrief} />
      </div>

      {!isBrief && (
        <div>
          <h2 className={style.caption}>Остальные услуги салона</h2>

          <VendorServiceList list={serviceList} isBrief={isBrief} />
        </div>
      )}

      {isBrief && (
        <VendorCheckIn
          isExpanded={isCheckInExpanded}
          onToggle={() => {
            setIsCheckInExpanded((prev) => !prev);
          }}
        />
      )}

      {isBrief && (
        <Button className={style.appointmentButton} variant="black">
          Записаться
        </Button>
      )}
    </>
  );
};

VendorContent.displayName = 'Vendor-Content';
