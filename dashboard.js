// Dashboard.js

import React from 'react';
import './Dashboard.css'; // You can create a separate CSS file for styling
import ProductData from './dashData'; // Import the product data

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="upper-half">
        <div className="left-column left-upper">
          <img src={ProductData.image} alt={ProductData.name} />
        </div>
        <div className="right-column small">
          <h1>{ProductData.name}</h1>
          <p className="description">{ProductData.description}</p>
        </div>
      </div>
      <div className="lower-half">
        <div className="left-column graph">
          {/* Empty graph or data visualization */}
        </div>
        <div className="right-column ">
          {ProductData.details.map((detail, index) => (
            <div className="detail-box" key={index}>
              <div className='detail-box-1'><p className="price">{detail.price}</p>
              <p className="website">{detail.website}</p></div>
              <div className='detail-box-2'>
              <a href={detail.link} target="_blank" rel="noopener noreferrer">
                <button className="visit-site-button">Visit Site</button>
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
