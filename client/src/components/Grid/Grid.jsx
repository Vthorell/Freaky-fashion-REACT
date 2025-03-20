import './Grid.css';

function Grid({ products }) {
    return (
        <div className="grid-container">
            {products.map((product) => (
                <div key={product.id} className="grid-item">
                    <img src={product.image_url} alt={product.name} className="product-image" />
                    <i className="bi bi-heart heart-icon"></i>
                    <div className="product-info">
                        <h4 className="product-name">{product.name}</h4>
                        <h4 className="product-price">{product.price} kr</h4>
                    </div>
                    <h4 className="brand">{product.brand}</h4>
                </div>
            ))}
        </div>
    );
}

export default Grid;
