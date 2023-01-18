import React from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import SimpleCart from "./components/SimpleCart/SimpleCart";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Categories/>
        <Products/>
        <SimpleCart/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
