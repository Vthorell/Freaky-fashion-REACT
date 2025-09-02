import './Front.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Front = ({ front }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <div>
      <div className="front">
        <img src={front.image} className="front-image" alt="Front banner" />
        <input 
          type="text" 
          placeholder="Sök produkt" 
          className="search-product"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <a><i className="bi bi-heart-fill"></i></a>
        <a><i className="bi bi-cart"></i></a>
      </div>
      <div className="news">
        <h3>Nyheter</h3>
        <h3>Topplistan</h3>
        <h3>Rea</h3>
        <h3>Kampanjer</h3>
      </div>
    </div>
  );
};

export default Front;
