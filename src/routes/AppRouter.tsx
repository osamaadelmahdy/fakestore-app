import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import Cart from "../features/cart/Cart";
import CartIcon from "../components/CartIcon";
import Discount from "../components/Discount";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <CartIcon />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Discount />
    </Router>
  );
};

export default AppRouter;
