import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import { Container, ProductTable, Total } from "./style";

interface Product {
  id: number;
  nome: string;
  preco: number;
  foto: string;
  amount: number;
}

export function Cart() {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.preco),
    subTotal: formatPrice(product.preco * product.amount)
  }))

  const total = formatPrice(
      cart.reduce((sumTotal, product) => {
        return sumTotal + product.preco * product.amount
      }, 0)
    )

  
    function handleProductIncrement(product: Product) {
      updateProductAmount({ productId: product.id, amount: product.amount + 1 })
    }
  
    function handleProductDecrement(product: Product) {
      updateProductAmount({ productId: product.id, amount: product.amount - 1 })
    }
  
  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>
        <tbody>
          {cartFormatted.map(product => (
            <tr key={product.id} data-testid="product">
              <td>
                <img src="" alt={product.nome} />
              </td>
              <td>
                <strong>{product.nome}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    data-testid="decrement-product"
                    disabled={product.amount <= 1}
                    onClick={() => handleProductDecrement(product)}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={product.amount}
                  />
                  <button
                    type="button"
                    data-testid="increment-product"
                    onClick={() => handleProductIncrement(product)}
                  >
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button
                  type="button"
                  data-testid="remove-product"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
