
import { useCart } from "../../hooks/useCart";
import { IProductCardProps } from "../../interfaces/interface";

import { Container } from "./style";

export function ProductCard( props: IProductCardProps) {
  const { addProduct } = useCart();

  function handleAddProduct(productId: number) {
    addProduct(productId);
  }

  
  return (
    <Container >
      {<img
        src={props.foto}
        alt={props.nome}
      />}

      <div>
        <div className="movie-info">
          <span>{props.id}</span>
          <div>
            <button onClick={() => handleAddProduct(props.id)}>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </Container>
  )
}