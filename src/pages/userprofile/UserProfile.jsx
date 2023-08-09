import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css'; // Import the CSS file
import EditUserProfile from './EditUserProfile';
import UserDashboard from '../../components/header/UserDashboard';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    // Fetch the user's data using the auto_login endpoint
    axios.get('/auto_login', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`, // Replace with your token storage method
      },
    })
    .then(response => {
      setUserData(response.data);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
  }, []);

  const handleEditProfile = () => {
    setIsEditMode(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    // For example: clear user session and redirect to the login page
    // logoutUser().then(() => window.location.href = '/login');
  };

  return (
    <div className="user-profile-container">
      <div className="edit-button" onClick={handleEditProfile}>
        Edit
      </div>
      {userData ? (
        <>

          <div className="user-profile-fields">
            <div className="field">
              <label>First Name:</label>
              <p>{userData.firstName}</p>
            </div>
            <div className="field">
              <label>Last Name:</label>
              <p>{userData.lastName}</p>
            </div>
            <div className="field">
              <label>Username:</label>
              <p>{userData.username}</p>
            </div>
            <div className="field">
              <label>Email:</label>
              <p>{userData.email}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;
