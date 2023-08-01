import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import About from './pages/about/About';
import Destination from './pages/destination/Destination';
import Packages from './pages/packages/Packages';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/packages" element={<Packages />} />
        {/* Add a 404 route if no match is found */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
