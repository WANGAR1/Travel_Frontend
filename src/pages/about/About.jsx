import React from 'react';
import './About.css'; // Import the CSS file
import AboutImage from './image/about.jpg'

const About = () => {
  return (
    <div id="about_container">
      <h1 className="about-heading">
        About <span>Us</span>
      </h1>
      <img 
      src={AboutImage} 
      alt="Illustration" 
      className="about-image" 
      />
      <p className="about-text">
      Welcome to TravelTrove! We are a community-driven travel website
        where you can explore various travel destinations,
        share your travel experiences, and connect with fellow travel enthusiasts.
      </p>
      <p>
        Our mission is to inspire people to travel, experience new cultures, and create unforgettable memories.
        Whether you are a seasoned traveler or planning your first trip, TravelTrove is here to provide you with
        valuable travel information and resources.
      </p>
      <div className="clearfix"></div>
    </div>
  );
};

export default About;
