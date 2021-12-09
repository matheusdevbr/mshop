
import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from "../../hooks/useCart";

import { IProductCardProps } from "../../interfaces/interface";

import { formatPrice } from "../../util/format";
import { ProductModal } from "../ProductModal";

import { Container } from "./style";

interface CartItemsAmount {
  [key: number]: number;
}

export function ProductCard( props: IProductCardProps) {
  const { addProduct, cart } = useCart();
  
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
  
  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[product.id] = product.amount;
    return newSumAmount;
  }, {} as CartItemsAmount)

  return (
    <>
      <Container >
        <img
          src={props.foto}
          alt={props.nome}
          onClick={handleOpenPokeDetailsModal}
        />

        <div>
          <div>
            <span>{props.nome}</span>
            <p>{formatPrice(props.preco)}</p>
            
            <div>
              <button 
                onClick={() => 
                handleAddProduct(props.id)}>
                  <div>
                    <MdAddShoppingCart size={16} color="#FFF" />
                    {cartItemsAmount[props.id] || 0} 
                  </div>
                  Adicionar ao carrinho
              </button>
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
      />
    </>
  )
}