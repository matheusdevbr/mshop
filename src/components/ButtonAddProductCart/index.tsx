import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from "../../hooks/useCart";
import { Container } from "./style";

interface ButtonAddProductCartProps {
  id: number;
}

interface CartItemsAmount {
  [key: number]: number;
}

export function ButtonAddProductCart({ id }: ButtonAddProductCartProps) {
  const { cart, addProduct } = useCart();

  function handleAddProduct(productId: number) {
    addProduct(productId);
  }

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[product.id] = product.amount;
    return newSumAmount;
  }, {} as CartItemsAmount)


  return (
    <Container 
            onClick={() => 
            handleAddProduct(id)}>
              <div>
                <MdAddShoppingCart size={18} color="#FFF" />
                {cartItemsAmount[id] || 0} 
              </div>
            Adicionar ao carrinho
    </Container>
  )
}