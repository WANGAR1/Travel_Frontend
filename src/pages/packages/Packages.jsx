import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';

const Packages = () => {
  const [travelPackages, setTravelPackages] = useState([]);

  useEffect(() => {
    fetch('/travel_packages')
      .then(response => response.json())
      .then(data => setTravelPackages(data))
      .catch(error => console.error('Error fetching travel packages:', error));
  }, []);

  return (
    <div className="packages-container"> {/* Add packages-container */}
      {travelPackages.map(travelPackage => (
        <div className="card" key={travelPackage.id}>
          <h2>{travelPackage.name}</h2>
          <div className="image-container">
            <img src={travelPackage.image_url} alt={`Image for ${travelPackage.name}`} />
          </div>
          <p>Location: {travelPackage.destination.location}</p>
          <p>{travelPackage.description}</p>
          <p>Price: ${travelPackage.pricing}</p>
          {Array.isArray(travelPackage.itinerary) ? (
            <ul>
              <h3>Itinerary</h3>
              {travelPackage.itinerary.map((day, index) => (
                <li key={index}>{day}</li>
              ))}
            </ul>
          ) : (
            <p>Itinerary: {travelPackage.itinerary}</p>
          )}
          <p>Booking Status: {travelPackage.booking_status}</p>
          <Link to="/bookingform" className="booking-button">Book Now</Link>
        </div>
      ))}
    </div>
  );
};

export default Packages;
