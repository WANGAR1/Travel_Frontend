import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import About from './pages/about/About';
import Destination from './pages/destination/Destination';
import Packages from './pages/packages/Packages';
import Contact from './pages/contact/Contact'
import Header from './components/header/Header'; // Import the Header component
import TravelExperience from './pages/travelexperience/TravelExperience';
import BookingForm from './components/bookingform/BookingForm';
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header /> {/* Include the Header component */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/experiences" element={<TravelExperience />} />
        <Route exact path="/contacts" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookingform" component={<BookingForm />} />
        {/* Add a 404 route if no match is found */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <div><Footer /></div>
    </div>
  );
};

export default App;

