import { createContext, ReactNode, useContext, useState } from 'react';

import { IProductProps } from '../interfaces/interface';

import { api } from '../services/api';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: IProductProps[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<IProductProps[]>(() => {
    const storagedCart = localStorage.getItem('@MShop:cart');
    if (storagedCart) {
      return JSON.parse(storagedCart); //retornando pro formato de array de produtos 
    }

    return [];
  });
  
  const addProduct = async (productId: number) => {
   
      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.id === productId);

      const currentAmount = productExists ? productExists.amount : 0;
      const amount = currentAmount + 1;

      if(productExists) {
        productExists.amount = amount;
      } else {
        const product = await api.get(`/produtos/${productId}`)

        const newProduct = {
          ...product.data,
          amount: 1
        }
        updatedCart.push(newProduct);
      }

      setCart(updatedCart);
    
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(product => product.id === productId);

      if(productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
      } else {
          throw Error();
      }
    } catch(error) {
      alert(error)
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const updateCart = [...cart];
      const productExists = updateCart.find(product => product.id === productId);

      if (productExists) {
        productExists.amount = amount;
        setCart(updateCart);
      } else {
        throw Error();
      }
    } catch(error) {
      alert(error)
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
