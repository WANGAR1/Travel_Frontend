import React from 'react';
import './TravelExperience.scss';
import travelData from './travelData'; // Import the data array

const TravelExperience = () => {
  return (
    <section className="light">
      <div className="container py-2" id="cardContainer">
        <h1 id="Title">Travel Experiences</h1> {/* Page title */}
        {/* Cards will be generated here */}
        {travelData.map((experience, index) => (
          <article className={`postcard light ${experience.color}`} key={index}>
            <a className="postcard__img_link" href="#">
              <img className="postcard__img" src={experience.image_url[0]} alt="Image Title" />
            </a>
            <div className={`postcard__text t-dark ${experience.image_position}`}>
              <h1 className="postcard__title">{experience.title}</h1>
              <p className="postcard__preview-txt">{experience.description}</p>
              {/* Render other content */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TravelExperience;
