import React from 'react';
import { Link } from 'react-router-dom'; // Step 1: Import Link
import './Packages.css'; // Import the CSS file
import cardData from './cardData';

const Packages = () => {

  return (
    <div>
      {cardData.map((cardData) => (
        <div className="card" key={cardData.id}>
          <h2>{cardData.name}</h2>
          <div className="image-container">
            {cardData.image.map((img, index) => (
              <img key={index} src={img} alt={`Image ${index + 1}`} />
            ))}
          </div>

          <p>Location: {cardData.location}</p>
          <p>{cardData.description}</p>
          <p>Duration: {cardData.duration}</p>
          <p>Price: ${cardData.price}</p>
          <ul>
            <h3>Itinerary</h3>
            {cardData.itinerary.map((day, index) => (
              <li key={index}>{day}</li>
            ))}
          </ul>

          <p>Rating: {cardData.rating}</p>

          {/* Booking Button */}
          <Link to="/bookingform" className="booking-button">Book Now</Link>
        </div>
      ))}
    </div>
  );
};

export default Packages;
