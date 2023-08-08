import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import React from 'react';
import landingImage from './Images/pic2.jpeg'; // Import the image
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="container py-8">
      <div className="row justify-content-center align-items-center">
          <div className="col-md-7">
            <h1 className="display-1">
              <span className="text-black">Unleash</span> 
              <span style={{ color: '#FA7436' }}>Your</span> 
              <span className="text-black">Wanderlust:</span>  Start Your Thrilling 
              <span style={{ color: '#FA7436' }}> Journey</span> with Us  Now!
            </h1>
            <p className="lead text-secondary">
              Embark on an unforgettable journey with our experienced team of travel enthusiasts. 
              From exotic destinations to cultural experiences, we offer the ultimate adventure for wanderers and explorers. 
              Let your wanderlust guide you through a world of breathtaking landscapes and vibrant cultures.
              Discover new horizons, immerse yourself in diverse traditions, and create memories that will last a lifetime.
              Whether you seek the serenity of pristine beaches or the adrenaline rush of daring expeditions,
              our curated travel experiences cater to every travel style.
              Unleash your wanderlust and set off on a path of exploration.
            </p>
            <div className="d-flex mt-5">
              <Link to="/destination" 
                type="button" 
                className="btn btn-primary btn-animated" 
                style={{ backgroundColor: 'white', color: '#FA7436', borderColor: '#FA7436', borderRadius: '30px', outline: 'none' }}
              >
                Discover Now
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <img src={landingImage} alt="Illustration" className="img-fluid home-image" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
