import './Front.css';

const Front = ({ front }) => {

 

    return (
      <div>
        <div className="front">
          <img src={front.image} className="front-image"/>
          <input type="text" placeholder="Sök produkt" className="search-product"/>
          <a><i className="bi bi-heart-fill"></i></a>
          <a><i className="bi bi-cart"></i></a>
        </div>
        <div className="news">
          <h3>Nyhter</h3>
          <h3>Topplistan</h3>
          <h3>Rea</h3>
          <h3>Kampanjer</h3>
        </div>
      </div>
    )};
  
  export default Front;