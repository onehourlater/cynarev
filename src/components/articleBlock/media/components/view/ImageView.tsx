import React, { useState, useRef, useContext } from 'react'

import { useModalContext } from '@/src/components/modal/context';


const ImageView = ({ src, bgColor }: { src: string, bgColor: string | null | undefined }) => {
  const { openModal } = useModalContext();

  const onClick = () => {
    openModal({
      image: { src },
    })
  }

  return (
    <div className="image-c" style={{ backgroundColor: bgColor ?? '#efefef' }} onClick={onClick}>
      <div className="image-wrapper">
        <img src={src} />
      </div>
    </div>
  )
}
export default ImageView