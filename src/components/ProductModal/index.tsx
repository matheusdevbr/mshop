import Modal from 'react-modal'

import { IProductModalProps } from "../../interfaces/interface";

export function ProductModal({name, isOpen, onRequestClose}: IProductModalProps) {
  return (
    
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <h1>{name}</h1>
      </Modal>
    
  )
}