import React from 'react';
import './About.css'; // Import the CSS file
import AboutImage from './image/about.jpg';

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
      <div className="about-text">
        <p>
          Welcome to TravelTrove! We are a community-driven travel website where you can explore various travel destinations, share your travel experiences, and connect with fellow travel enthusiasts.
        </p>
        <p>
          Our mission is to inspire people to travel, experience new cultures, and create unforgettable memories. Whether you are a seasoned traveler or planning your first trip, TravelTrove is here to provide you with valuable travel information and resources.
        </p>
        <p>
          At TravelTrove, we believe that traveling not only broadens your horizons but also enhances personal growth and understanding. We strive to be your go-to platform for discovering hidden gems, must-visit attractions, and practical travel tips.
        </p>
        <p>
          Join our vibrant community of travelers and share your adventures, recommendations, and insights. Whether you are a solo traveler, family vacationer, or an adventure seeker, TravelTrove welcomes you to embark on a journey of discovery and wanderlust.
        </p>
      </div>
      <div className="clearfix"></div>
    </div>
  );
};

export default About;
