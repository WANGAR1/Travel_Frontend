import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Carousel = () => {
  const { id } = useParams();
  const [travelPackages, setTravelPackages] = useState([]); // Define travelPackages state

  useEffect(() => {
    fetch(`/travel_packages/${id}`)
      .then(response => response.json())
      .then(data => setTravelPackages([data])) // Set the fetched data in an array
      .catch(error => console.error('Error fetching travel package:', error));
  }, [id]);

  if (travelPackages.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    
    <div>
      <div className="relative flex items-center justify-center w-full text-gray-50">
      <button
        aria-label="Slide back"
        type="button"
        className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:bg-gray-400 focus:ring focus:ring focus:ring-opacity-50"
      >
        <svg
          width="8"
          height="14"
          fill="none"
          viewBox="0 0 8 14"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M7 1L1 7L7 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
        {travelPackages.map((travelPackage, index) => (
          <div key={index} className="relative flex flex-shrink-0 w-full sm:w-auto">
            <img
              className="object-cover object-center h-96 aspect-square bg-gray-500"
              src={travelPackage.image_url}
              alt={`Image for ${travelPackage.name}`}
            />
          </div>
        ))}
      </div>
      <button
        aria-label="Slide forward"
        id="next"
        className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:bg-gray-400 focus:ring focus:ring-opacity-50"
      >
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M1 1L7 7L1 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
    </div>
    
  );
};

export default Carousel;
