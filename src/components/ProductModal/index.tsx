import Modal from 'react-modal'

interface ProductModalProps {
  name: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ProductModal({name, isOpen, onRequestClose}: ProductModalProps) {
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