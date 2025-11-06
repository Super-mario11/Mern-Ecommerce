import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products.json';

const ProductPage = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

return (
    <div className="product-page">
      <div className="container">
        <div className="product-details">
          <div className="product-image">
            <img src={product.imageUrl} alt={product.name} />
          </div>
          <div className="product-info">
            <h1>{product.name}</h1>
            <p className="desc">{product.description}</p>
            <p className="price">${product.price}</p>
            <div className="product-actions">
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-outline-primary">
                Add to Wishlist
              </button>
            </div>
            <div className="product-meta">
              <h4>Product Details</h4>
              <ul>
                <li>
                  <strong>Brand:</strong> {product.brand}
                </li>
                <li>
                  <strong>Category:</strong> {product.category}
                </li>
                <li>
                  <strong>SKU:</strong> {product.sku}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
