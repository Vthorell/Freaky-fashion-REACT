import './Grid.css';

function Grid({ products }) {
    return (
        <div className="grid-container">
            {products.map((product) => (
                <div key={product.id} className="grid-item">
                    <img src={product.image_url} alt={product.name} className="product-image" />
                    <h4>{product.name}</h4>
                    <h4>{product.price} kr</h4>
                    <h4>{product.brand}</h4>
                </div>
            ))}
        </div>
    );
}

export default Grid;
