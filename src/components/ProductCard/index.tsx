
import { useState } from "react";

import { IProductCardProps } from "../../interfaces/interface";

import { formatPrice } from "../../util/format";
import { ButtonAddProductCart } from "../ButtonAddProductCart";
import { ProductModal } from "../ProductModal";

import { Container } from "./style";



export function ProductCard( props: IProductCardProps) {

  const [isProductModalOpen, setisProductModalOpen] = useState(false);
 
  function handleOpenPokeDetailsModal() {
    setisProductModalOpen(true)
  }

  function handleClosePokeDetailsModal() {
    setisProductModalOpen(false)
  }

  return (
    <>
      <Container >
        <div className="card-open-modal" 
        onClick={handleOpenPokeDetailsModal}
        >
          <img
            src={props.foto}
            alt={props.nome}

          />

          <div>
            <div>
              <span>{props.nome}</span>
              <p>{formatPrice(props.preco)}</p>

              <div>
                <ButtonAddProductCart id={props.id} />
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <ProductModal
        name={props.nome}
        isOpen={isProductModalOpen}
        onRequestClose={handleClosePokeDetailsModal}
        id={props.id}
        descricao={props.descricao}
        preco={props.preco}
        foto={props.foto}
        categoria={props.categoria}
      />
    </>
  )
}