
import Modal from 'react-modal'

import { IProductModalProps } from "../../interfaces/interface";
import { ButtonAddProductCart } from '../ButtonAddProductCart';
import { Container } from './style';



export function ProductModal({name, isOpen, onRequestClose, preco, descricao, foto, id, categoria_id}: IProductModalProps) {
  return (
    
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
      <Container>
        <div>
          <div>
            <img src="" alt="" />
          </div>

          <div>
            <h1>{name}</h1>
            <p>{descricao}</p>
          </div>
        </div>

        <ButtonAddProductCart id={id}/>
      </Container>
      </Modal>
    
  )
}