import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SearchResult.css';

const SearchResults = ({ products }) => {
  const [searchResults, setSearchResults] = useState([]);
  const query = new URLSearchParams(useLocation().search).get('q'); 

  useEffect(() => {
    if (query) {
      const results = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results); 
    }
  }, [query, products]); 

  return (
    <div>
      {searchResults.length > 0 ? (
        <div>
          <h2>Hittade {searchResults.length} produkter</h2> 
          <div className="search-results">
            {searchResults.map(product => (
              <div key={product.id} className="product-item">
                <Link to={`/products/${product.slug}`}>
                  <img src={product.image_url} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>{product.price} SEK</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Inga produkter hittades för din sökning.</p> 
      )}
    </div>
  );
};

export default SearchResults;


