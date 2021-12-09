
import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import { IProductCardProps } from "../../interfaces/interface";
import { ProductModal } from "../ProductModal";

import { Container } from "./style";

export function ProductCard( props: IProductCardProps) {
  const { addProduct } = useCart();

  function handleAddProduct(productId: number) {
    addProduct(productId);
  }

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
        <img
          src={props.foto}
          alt={props.nome}
          onClick={handleOpenPokeDetailsModal}
        />

        <div>
          <div className="movie-info">
            <span>{props.id}</span>
            <div>
              <button onClick={() => handleAddProduct(props.id)}>Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </Container>
      
      <ProductModal
        name={props.nome}
        isOpen={isProductModalOpen}
        onRequestClose={handleClosePokeDetailsModal}
      />
    </>
  )
}