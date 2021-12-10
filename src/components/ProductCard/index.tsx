
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
          <div>
            <img
              src={props.foto}
              alt={props.nome}

            />
          </div>
          <div>
            <div>
              <h2>{props.nome}</h2>
              <span>{formatPrice(props.preco)}</span>   
            </div>
          </div>
        </div>
        <div>
          <ButtonAddProductCart id={props.id} />
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