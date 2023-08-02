import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import './Destination.css';

const Destination = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('/destinations')  // Update the API endpoint
      .then(response => response.json())
      .then(data => setDestinations(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="destination-container">
      <h1 className="destination-title">Destinations</h1>
      <p className="destination-description">
        Embark on a journey of a lifetime with our premier travel agency. Discover the world's most captivating destinations and immerse yourself in unique cultures, breathtaking landscapes, and unforgettable experiences. Choose among an extensive selection of alluring locations, each offering its own blend of charm and enchantment. Your extraordinary journey starts here!
      </p>
      <Masonry breakpointCols={3} className="masonry-grid" columnClassName="masonry-grid-column">
        {destinations.map(destination => (
          <Link to={`/destination/${destination.id}`} key={destination.id} className="destination-link">
            <div className="destination-item">
              <img src={destination.image_url} alt={destination.location} className="destination-image" />
              <div className="destination-name">{destination.location}, {destination.country}</div>
            </div>
          </Link>
        ))}
      </Masonry>
    </div>
  );
};

export default Destination;
