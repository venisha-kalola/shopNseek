import React from 'react';
import products from './recentpricedata'; // Import the product data
import "./recentprice.css";
function PriceDrops() {
  return (
    <div className="price-drops">
      <h3>Recent Price Drops : </h3>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PriceDrops;
