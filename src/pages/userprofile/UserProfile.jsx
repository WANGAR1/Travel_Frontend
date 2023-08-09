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
         <div>
          <div>
            <UserDashboard />
          </div>

      <div className="user-profile-container">
        {!userData ? (
        <p>Loading user data...</p>
      ) : (
        <>
          {!isEditMode ? (
          <>
            <div className="edit-button" onClick={handleEditProfile}>
              Edit
            </div>

            <div className="user-profile-fields">
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
          <EditUserProfile userData={userData} />
        )}
          </>
      )}
          
        
      </div>
         </div>     
  );
};

export default UserProfile;