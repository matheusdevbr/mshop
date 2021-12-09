import { MdShoppingBasket } from 'react-icons/md';

import { useCart } from '../../hooks/useCart';

import { Cart, Container, Home } from "./styles";

export function Header() {
  const { cart } = useCart();
  const cartSize = cart.length;


  return (
    <Container>
      <Home to="/">
        home
      </Home>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  )
}