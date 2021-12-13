import { Routes, Route } from "react-router-dom";

import {Home} from './pages/Home';
import {Cart} from './pages/Cart';

export const Router = () => {
  return (
    <Routes>
      <Route path="/mshop" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  );
};