import React, { useMemo } from 'react';
import classNames from 'classnames';

import style from './style.scss';

type SrcList = string[];

interface ISourceListable {
  srcList: SrcList;
}

type ImageProps = React.ComponentPropsWithoutRef<'img'> & ISourceListable;

export const Image: React.FC<ImageProps> = ({
  alt,
  className,
  loading = 'eager',
  srcList,
  ...propsRest
}) => {
  const imageList: string | undefined = useMemo(
    () => {
      if (srcList.length === 1) {
        return;
      }
      return srcList
        .map((img, i) => `${img} ${i + 1}x`)
        .reverse()
        .join(', ');
    },
    [srcList],
  );

  const src = srcList[srcList.length - 1];

  return (
    <img
      alt={alt}
      className={classNames(style.root, className)}
      loading={loading}
      src={src}
      srcSet={imageList}
      {...propsRest}
    />
  );
};
