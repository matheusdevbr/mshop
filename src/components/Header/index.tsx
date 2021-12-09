import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';

import { Cart, Container } from "./style";

export function Header() {
  const { cart } = useCart();
  const cartSize = cart.length;


  return (
    <Container>
      <Link to="/">
        <h3>Home</h3>
      </Link>

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