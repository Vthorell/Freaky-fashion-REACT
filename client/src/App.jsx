import './App.css';
 import { useState, useEffect } from "react";
 import Hero from "./components/Hero/Hero";
 import Grid from "./components/Grid/Grid";
 import Front from "./components/Front/Front";

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
    image: "/images/Freaky.png"
   };

  return (
    <>
      <Front front={front}/>
      <Hero hero={hero}/>
      <Grid products={products}/> 
    </>
  )
}

export default App
