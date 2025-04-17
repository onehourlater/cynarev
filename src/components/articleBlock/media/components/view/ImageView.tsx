import React, { useState, useEffect } from 'react'
import classNames from 'classnames';

import { useModalContext } from '@/src/components/modal/context';


const useProgressiveImage = (lowQualitySrc: string, highQualitySrc: string): [string, boolean] => {
  const [src, setSrc] = useState(lowQualitySrc)
  useEffect(() => {
    setSrc(lowQualitySrc)
    const img = new Image()
    img.src = highQualitySrc
    img.onload = () => {
      setSrc(highQualitySrc)
    };
  }, [lowQualitySrc, highQualitySrc])
  return [src, src === lowQualitySrc]
};


const ImageView = ({ src, thumbnail, bgColor }: { src: string, thumbnail: string, bgColor: string | null | undefined }) => {
  const { openModal } = useModalContext();

  const [imgSrc, isBlured] = useProgressiveImage(thumbnail, src)

  const onClick = () => {
    openModal({
      image: { src },
    })
  }

  return (
    <div className="image-c" style={{ backgroundColor: bgColor ?? '#efefef' }} onClick={onClick}>
      <div className={classNames('image-wrapper', { 'image-wrapper--blured': isBlured })}>
        <img src={imgSrc} />
      </div>
    </div>
  )
}
export default ImageView