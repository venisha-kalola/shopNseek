import React from 'react';
import "./Commodities.css";
import commoditiesData from './commoditiesData'; // Import the product data

function Commodities() {
  return (
    <div className="commodities">
     
      <div className="commodities-list">
        {commoditiesData.map((commodity) => (
          <div key={commodity.id} className="commodity">
            <img src={commodity.image} alt={commodity.name} />
            <h3>{commodity.name}</h3>
            <p>Rating: {commodity.rating}</p>
            <p>Price: {commodity.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Commodities;
