import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products.json';
import categoriesData from '../../data/categories.json';

const Homepage = () => {
  const { name } = useParams();

  const getProductsByCategory = () => {
    if (name) {
      return productsData.filter(product => product.category === name);
    } else {
      return productsData;
    }
  };

  const getCategoryName = () => {
    if (name) {
      const category = categoriesData.find(cat => cat.name === name);
      return category ? category.name : 'All Products';
    } else {
      return 'All Products';
    }
  };

  const productList = getProductsByCategory();

  return (
    <div className="homepage">
      <div className="hero">
        <h1>Welcome to Fixkart</h1>
        <p>Your one-stop shop for all hardware needs.</p>
        <a href="" className="btn">Shop Now</a>
      </div>
      <div className="container">
        <h2>{getCategoryName()}</h2>
        <div className="products-list">
          {productList.map(product => (
            <div key={product.id} className="product-card">
              <a href={`/product/${product.id}`}>
                <img src={product.imageUrl} alt={product.name} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="price">${product.price}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
