import React, { useState, useEffect } from 'react';
import './TravelExperience.css';

const TravelExperience = () => {
  const [travelExperiences, setTravelExperiences] = useState([]);

  useEffect(() => {
    fetch('/travel_experiences')
      .then(response => response.json())
      .then(data => {
        setTravelExperiences(data);
      })
      .catch(error => {
        console.error('Error fetching travel experiences:', error);
      });
  }, []);

  return (
    <div>
      <h1 className="travel-experience-title">Travel Experiences</h1>
      {travelExperiences.map((travelItem) => (
        <div className="card" key={travelItem.id}>
          <div className="image-container">
            <img src={travelItem.image_url} alt={`Image for ${travelItem.title}`} />
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
