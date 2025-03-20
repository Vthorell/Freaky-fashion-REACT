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

  // Denna funktion uppdaterar produktens state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Denna funktion skapar slug automatiskt baserat på produktens namn
  const generateSlug = (name) => {
    return name.toLowerCase().replace(/\s+/g, '-'); // Omvandla till små bokstäver och ersätt mellanslag med bindestreck
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Skapa slug baserat på produktens namn
    const newProduct = {
      ...product,
      slug: generateSlug(product.name), // Lägg till slug till produktobjektet
    };

    // Skicka produkt till backend via addProduct
    await addProduct(newProduct);
    navigate("/admin/products"); // Navigera tillbaka till produktsidan
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
