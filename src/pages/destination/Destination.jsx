import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';

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
    <Masonry breakpointCols={3} className="destination-masonry" columnClassName="destination-masonry-column">
      {destinations.map(destination => (
        <Link to={`/destination/${destination.id}`} key={destination.id} className="destination-link">
          <div className="destination-item">
            <img src={destination.image_url} alt={destination.location} className="destination-image" />
            <div className="destination-name">{destination.location}, {destination.country}</div>
          </div>
        </Link>
      ))}
    </Masonry>
  );
};

export default Destination;
