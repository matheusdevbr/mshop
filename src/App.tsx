import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from "./hooks/useCart";

import { GlobalStyles } from "./styles/global";
import { Router } from './routes';
import { Header } from './components/Header';

export function App() {


  return (
    <BrowserRouter>
    <CartProvider>
      <Header />
      <Router />
      <GlobalStyles />
    </CartProvider>
    </BrowserRouter>
  );
}
