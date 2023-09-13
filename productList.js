import React from "react";
import productData from "./productData"; // Import the product data array
import "./productList.css";
function ProductList() {
  return (
    <div className="catt">
      <h2 className="title-other-categories">Popular Product Categories</h2>
      <div className="shop">
        {productData.map((product, index) => (
          <div className="box" key={index}>
           <h2>{product.name}</h2>
           <img src={product.image} alt={product.name} className="box-img" />
           <p><a href={product.link}>See More</a></p>
         </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
