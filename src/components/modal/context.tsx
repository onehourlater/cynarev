import React, { useState, useEffect, createContext } from 'react'

import { ModalContextType, ModalState, OpenModalProps } from './types'
import Modal from './modal'


const ModalContext = createContext<ModalContextType | null>(null)
ModalContext.displayName = 'ModalContext'

// TODO: any
const ModalContextProvider = ({ children }: any) => {
  const [state, setState] = useState<ModalState>({
    isOpen: false,
    image: null,
  });

  useEffect(() => {
    document.body.style.overflow = state.isOpen ? 'hidden' : 'unset'
 }, [state.isOpen])

  const openModal = (data: OpenModalProps) => {
    setState({
      isOpen: true,
      image: data.image,
    })
  }

  const closeModal = () => {
    setState({
      isOpen: false,
      image: null,
    })
  }

  return (
    <ModalContext.Provider value={{ openModal }}>
      <Modal {...state} closeModal={closeModal} />
      { children }
    </ModalContext.Provider> 
 )
}

const useModalContext = () => {
  const context = React.useContext(ModalContext);
  // if context is undefined this means it was used outside of its provider
  // you can throw an error telling that to your fellow developers
  if(!context) {
    throw new Error('useModalContext must be used under <ModalContext.Provider />');
  }
  return context;
}

export {
  ModalContextProvider,
  useModalContext,
}