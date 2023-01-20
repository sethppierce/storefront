import React from "react";
import Header from "./components/Header/Header";
import SimpleCart from "./components/SimpleCart/SimpleCart";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useParams } from "react-router-dom";
import StoreFront from "./components/StoreFront/StoreFront";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ShoppingCart from './components/ShoppingCart/ShoppingCart'

function App() {
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  return (
    <>
      <Header />
      <SimpleCart />
      <main>
        <Routes>
          <Route path="/" element={<StoreFront/>} />
          <Route path="/products/:id"  element={<ProductDetails/>}/>
          <Route path="/cart" element={<ShoppingCart />}/>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
