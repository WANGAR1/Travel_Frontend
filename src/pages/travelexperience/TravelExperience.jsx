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
    <div className="max-w-6xl mx-auto">
      <h1 className="travel-experience-title">Travel Experiences</h1>
      <div className="flex-wrap">
        {travelExperiences.map((travelItem) => (
          <div className="card m-4 w-1/3 md:w-1/4" key={travelItem.id}>
            <div className="image-container">
              <img src={travelItem.image_url} alt={`Image for ${travelItem.title}`} className="rounded-t-lg" />
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
    </div>
  );
};

export default TravelExperience;
