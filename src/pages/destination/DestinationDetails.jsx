import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './DestinationDetails.css';

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
<div className='page-container'>
  <div className='page-content'>
    <div className="packages-container flex flex-col items-center">
    {destinationDetails.travel_packages.map((travelPackage) => (
      <div className="package-card mb-5" key={travelPackage.id}><div className="image-container">
            <img
              src={travelPackage.image_url}
              alt={`Image for ${travelPackage.name}`}
              className="object-cover max-w-full max-h-full rounded-lg"
            />
          </div>
          <h2 className="text-4xl font-semibold">{travelPackage.name}</h2>
          <p className="text-3xl text-orange-600 mb-1">
            Location: {destinationDetails.destination.location}
          </p>
          <p className="mb-3">{travelPackage.description}</p>
          <p className="text-green-600 font-semibold mb-1">
            Price: ${travelPackage.pricing}
          </p>
          {Array.isArray(travelPackage.itinerary) ? (
            <div>
              <h3 className="text-xl font-semibold mb-1">Itinerary</h3>
              <ul className="list-disc pl-5">
                {travelPackage.itinerary.map((day, index) => (
                  <li key={index} className="mb-1">
                    {day}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="mb-1">Itinerary: {travelPackage.itinerary}</p>
          )}
          <p className="text-gray-600 mb-2">
            Booking Status: {travelPackage.booking_status}
          </p>
          <Link
            to="/bookingform"
            className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-lime-600"
          >
            Book Now
          </Link>
          <Link
            to="/reviews"
            className="inline-block ml-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-lime-600"
          >
            Reviews
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>
  );
};

export default DestinationDetails;

