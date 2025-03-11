import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminProducts from "./pages/AdminProducts";
 import { useState, useEffect } from "react";
 import Hero from "./components/Hero/Hero";
 import Grid from "./components/Grid/Grid";
 import Front from "./components/Front/Front";
 import NewProduct from "./pages/NewProduct";


function App() {

   const [products, setProducts] = useState([]);

   useEffect(() => {

     fetch("http://localhost:8080/api/products")
     .then(resp => resp.json())
     .then(products => {
       setProducts(products);
     });

   }, []);


   const hero = {
     info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor",
     image: "/images/hero.jpg",
     title: "Lorem ipsum dolor"
   };

   const front = {
    image: "/images/freaky-f.png"
   };

   return (
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Front front={front} />
              <Hero hero={hero} />
              <Grid products={products} />
            </>
          } />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/products/new" element={<NewProduct />} />
        </Routes>
      </Router>
    );
  }

export default App
