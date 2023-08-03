import React from 'react';
import './TravelExperience.css'; // Import the CSS file
import travelData from './travelData';

const TravelExperience = () => {
  return (
    <div>
        <h1 className="travel-experience-title">My Travel Experiences</h1>
      {travelData.map((travelItem) => (
        <div className="card" key={travelItem.id}>
          <div className="image-container">
            {travelItem.image_url.map((img, index) => (
              <img key={index} src={img} alt={`Image ${index + 1}`} />
            ))}
          </div>
          <div className="mt-6 mb-2">
            <h2 className="text-xl font-semibold tracking-wide">
              {travelItem.title}
            </h2>
          </div>
          <p className="dark:text-black-100">
            {travelItem.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default TravelExperience;

