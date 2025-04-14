type OpenModalProps = {
  image: {
    src: string;
  }
}
type ModalContextType = {
  openModal: (props: OpenModalProps) => void;
}
type ModalState = {
  isOpen: boolean;
  image: { src: string } | null;
}
type ModalProps = ModalState & {
  closeModal: () => void;
}

export type {
  OpenModalProps,
  ModalContextType,
  ModalState,
  ModalProps,
}