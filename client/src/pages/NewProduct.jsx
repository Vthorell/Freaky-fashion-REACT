import './Admin.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewProduct({ addProduct }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image_url: "",
    brand: "",
    sku: "",
    price: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const generateSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newProduct = {
      ...product,
      slug: generateSlug(product.name), 
    };

    await addProduct(newProduct); 
    navigate("/admin/products"); 
  };

  return (
    <div>
      <div className="Admin-topbar">
        <h1>Administration</h1>
      </div>
      <div className="admin-grid">
        <div className="sidebar">
          <h2>Produkter</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Namn:</label>
            <input
              className="name"
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Beskrivning:</label>
            <textarea
              className="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Bild URL:</label>
            <input
              className="image"
              type="text"
              name="image_url"
              value={product.image_url}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Märke:</label>
            <input
              className="brand"
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>SKU:</label>
            <input
              className="sku"
              type="text"
              name="sku"
              value={product.sku}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Pris:</label>
            <input
              className="price"
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Lägg till</button>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;

