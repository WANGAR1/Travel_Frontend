import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import React from 'react';
import landingImage from './Images/Landing.png'; // Import the image
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-6">
              <span className="text-black">Unleash</span> <span className="text-black">Your</span> <span className="text-black">Wanderlust:</span> Start Your Thrilling <span style={{ color: '#FA7436' }}>Journey</span> with Us Now!
            </h1>
            <p className="lead text-secondary">
              Embark on an unforgettable journey with our experienced team of travel enthusiasts. From exotic destinations to cultural experiences, we offer the ultimate adventure for wanderers and explorers. Let your wanderlust guide you through a world of breathtaking landscapes and vibrant cultures.
            </p>
            <div className="d-flex mt-6">
             <Link to="/destination" type="button" className="btn btn-primary btn-animated" style={{ backgroundColor: 'white', color: '#FA7436', borderColor: '#FA7436', borderRadius: '20px', outline: 'none' }}>
  Discover Now
</Link>

            </div>
          </div>
          <div className="col-md-6">
            <img src={landingImage} alt="Illustration" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;