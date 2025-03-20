import React from "react";
import './Admin.css';
import { useNavigate } from "react-router-dom";

function AdminProducts({ products }) {
  const navigate = useNavigate();

  return (
    <div className="admin">
      <div className="Admin-topbar">
        <h1>Administration</h1>
      </div>
      <div className="admin-grid">
        <div className="sidebar">
          <h2>Produkter</h2>
        </div>
        <div className="producttable">
          <div className="new-product">
            <h2>Produkter</h2>
            <button onClick={() => navigate("/admin/products/new")}>Ny produkt</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Namn</th>
                <th>SKU</th>
                <th>Pris</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.sku}</td>
                  <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminProducts;
