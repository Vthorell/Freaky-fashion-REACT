import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminProducts from "./pages/AdminProducts";
import { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Grid from "./components/Grid/Grid";
import Front from "./components/Front/Front";
import NewProduct from "./pages/NewProduct";
import ProductDetail from './pages/ProductDetail';
import Accordion from "./components/Accordion/Accordion";
import SearchResults from "./pages/SearchResult";

function App() {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((resp) => resp.json())
      .then((products) => {
        setProducts(products); 
      })
      .catch((error) => console.error("Fel vid hämtning av produkter:", error));
  }, []); 

  const hero = {
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
    image: "/images/hero.jpg",
    title: "Lorem ipsum dolor"
  };

  const front = {
    image: "/images/freaky-f.png"
  };

  const addProduct = async (newProduct) => {
    const response = await fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      console.error("Fel vid tillägg av produkt!");
      return;
    }

    const addedProduct = await response.json();
    setProducts((prevProducts) => [...prevProducts, addedProduct]); 
  };

  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={
            <>
              <Front front={front} />
              <Hero hero={hero} />
              <Grid products={products} />
            </>
          } />
          <Route path="/admin/products" element={<AdminProducts products={products} />} />
          <Route path="/admin/products/new" element={<NewProduct addProduct={addProduct} />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/search" element={<SearchResults products={products} />} />
        </Routes>

        <Accordion /> 
        <h4 className="bottom"> @Freaky fashion </h4> 
      </>
    </Router>
  );
}

export default App;
