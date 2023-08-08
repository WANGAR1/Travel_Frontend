// DestinationDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Destination.css';

const DestinationDetails = () => {
  const { id } = useParams();
  const [destinationDetails, setDestinationDetails] = useState(null);

  useEffect(() => {
    // Fetch destination details and related travel packages by ID
    fetch(`/destinations/${id}`)
      .then(response => response.json())
      .then(data => {
        setDestinationDetails(data); // Data structure matches the provided API response
      })
      .catch(error => {
        console.error('Error fetching destination details:', error);
      });
  }, [id]);

  if (!destinationDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="destination-details">
      <h2>{destinationDetails.destination.location}, {destinationDetails.destination.country}</h2>
      <div className="packages-container">
        {destinationDetails.travel_packages.map(travelPackage => (
          <div className="card" key={travelPackage.id}>
            <h2>{travelPackage.name}</h2>
            <div className="image-container">
              <img src={travelPackage.image_url} alt={`Image for ${travelPackage.name}`} />
            </div>
            <p>Location: {destinationDetails.destination.location}</p>
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
    </div>
  );
};

export default DestinationDetails;
