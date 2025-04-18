import React, { useRef, MouseEvent, useEffect, EventHandler } from 'react'

import { CloseIcon } from '@/src/components/icons'
import { ModalProps } from './types'


const Modal = (props: ModalProps) => {
  const { isOpen, image } = props
  const { closeModal } = props

  const modalContainerRef = useRef<HTMLInputElement>(null)

  // ESC: Keydown event listener
  useEffect(() => {
    // TODO: event type
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }

    document.addEventListener("keydown", handleKeydown, false);

    return () => {
      document.removeEventListener("keydown", handleKeydown, false);
    }
  }, [])

  if (!isOpen) {
    return <></>
  }

  // TODO: issue with types
  const onClickEvent = (e: MouseEvent) => {
    if (modalContainerRef.current && !modalContainerRef.current.contains(e.target as Node)) {
      closeModal()
    }
  }

  return (
    <div className="modal" onClick={onClickEvent}>
      <div className="modal__close">
        <CloseIcon />
      </div>
      <div ref={modalContainerRef} className="modal__c">
        <img src={image?.src} className="modal-img" />
      </div>
    </div>
  )
}
export default Modal
