import React from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";

function App() {
  return (
    <>
      <Header/>
      <main>
        <Categories/>
        <Products/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
