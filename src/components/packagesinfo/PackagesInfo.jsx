import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PackageInfo = ({ travelPackage }) => {
  return (
    <div className="card border-2 border-gray-300 shadow-md rounded-lg p-7 bg-white">
     <div className="image-container flex items-center justify-center w-full h-60 rounded-full overflow-hidden mx-auto">
  <img 
    src={travelPackage.image_url} 
    alt={`Image for ${travelPackage.name}`} 
    className="object-cover max-w-full max-h-full rounded-full" /> {/* Add your image styling classes here */}
</div>



      <h2 className="text-6xl font-semibold mb-2">{travelPackage.name}</h2>
      <p className="text-3xl text-orange-600 mb-1">Location: {travelPackage.destination.location}</p>
      <p className="mb-3">{travelPackage.description}</p>
      <p className="text-green-600 font-semibold mb-1">Price: ${travelPackage.pricing}</p>
      {Array.isArray(travelPackage.itinerary) ? (
        <div>
          <h3 className="text-xl font-semibold mb-1">Itinerary</h3>
          <ul className="list-disc pl-5">
            {travelPackage.itinerary.map((day, index) => (
              <li key={index} className="mb-1">{day}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mb-1">Itinerary: {travelPackage.itinerary}</p>
      )}
      <p className="text-gray-600 mb-2">Booking Status: {travelPackage.booking_status}</p>
      {/* Note: Link to "/bookingform" should be added here */}
      <Link to="/bookingform" className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-lime-600">Book Now</Link>
    </div>
  );
};

const PackagesInfo = () => {
  const [travelPackages, setTravelPackages] = useState([]);
  
  useEffect(() => {
    fetch('/travel_packages')
      .then(response => response.json())
      .then(data => setTravelPackages(data))
      .catch(error => console.error('Error fetching travel packages:', error));
  }, []);

  return (
    <div>
      {/* Map over the travelPackages array and render PackageInfo components */}
      {travelPackages.map(travelPackage => (
        <PackageInfo key={travelPackage.id} travelPackage={travelPackage} />
      ))}
    </div>
  );
};

export default PackagesInfo;
