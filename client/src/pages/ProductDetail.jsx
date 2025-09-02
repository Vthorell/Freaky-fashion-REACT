import './details.css';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function ProductDetail() {
  const { slug } = useParams(); 
  const [product, setProduct] = useState(null); 
  const [allProducts, setAllProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch(`http://localhost:8080/api/products/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fel vid hämtning av produkt:", error);
        setLoading(false);
      });

    fetch('http://localhost:8080/api/products')
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
        const shuffled = data.sort(() => 0.5 - Math.random()); 
        setRandomProducts(shuffled.slice(0, 3)); 
      })
      .catch((error) => {
        console.error("Fel vid hämtning av alla produkter:", error);
      });
  }, [slug]); 

  if (loading) {
    return <p>Laddar produkt...</p>; 
  }

  if (!product) {
    return <p>Produkt inte hittad.</p>; 
  }

  return (
    <div>
      <div className="front">
        <Link to="/">
          <img src="/images/freaky-f.png" className="front-image" alt="Front" />
        </Link>
        <input type="text" placeholder="Sök produkt" className="search-product" />
        <a><i className="bi bi-heart-fill"></i></a>
        <a><i className="bi bi-cart"></i></a>
      </div>
      
      <div className="news">
        <h3>Nyheter</h3>
        <h3>Topplistan</h3>
        <h3>Rea</h3>
        <h3>Kampanjer</h3>
      </div>

      <div className="product-detail">
        <img src={product.image_url} alt={product.name} className="product-image" />
        <div>
          <h2>{product.name}</h2>
          <h4>{product.brand}</h4>
          <p>{product.description}</p>
          <p>Price: {product.price} SEK</p>
          <button className="add-to-cart">Lägg i Varukorg</button>
        </div>
      </div>

      <h2 className="similar-products">Liknande produkter</h2>
      <div className="random-products">
        {allProducts.length > 0 ? (
          randomProducts.length > 0 ? (
            randomProducts.map((randomProduct) => (
              <div key={randomProduct.id} className="product-item">
                <Link to={`/products/${randomProduct.slug}`}>
                  <img src={randomProduct.image_url} alt={randomProduct.name} className="product-image" />
                </Link>
                <h4>{randomProduct.name}</h4>
                <p>{randomProduct.price} SEK</p>
              </div>
            ))
          ) : (
            <p>Inga slumpmässiga produkter hittades.</p>
          )
        ) : (
          <p>Laddar produkter...</p>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;

