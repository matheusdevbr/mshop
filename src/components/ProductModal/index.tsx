
import Modal from 'react-modal'

import { IProductModalProps } from "../../interfaces/interface";
import { formatPrice } from '../../util/format';
import { ButtonAddProductCart } from '../ButtonAddProductCart';
import { Container } from './style';


export function ProductModal({name, isOpen, onRequestClose, preco, descricao, foto, id, categoria}: IProductModalProps) {
 
  
  return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
      <Container>
        <div className="product-info-modal">
          <div>
            <img src={foto} alt={`Imagem do produto ${name}`} />
          </div>

          <div className="product-info-modal-text">
            <div>
              <h4>{name}</h4>
              <span>{categoria}</span>
              <p>{descricao}</p>
            </div>
            <div>
              <strong>{formatPrice(preco)}</strong>
            </div>
          </div>
        </div>

        <ButtonAddProductCart id={id}/>
      </Container>
      </Modal>
    
  )
}