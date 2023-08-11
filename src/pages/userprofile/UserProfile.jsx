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


  return (
  <div>
    <div>
     <UserDashboard />
    </div>
    <div className='profile-container'>
    <div className="user-profile-container">
        {!userData ? (
        <p>Loading user data...</p>
      ) : (
        <>
          {!isEditMode ? (
          <>
            <div className="inline-block px-4 py-2 bg-orange-500 text-white rounded hover:bg-lime-600" onClick={handleEditProfile}>
              Edit
            </div>

            <div className="user-profile-fields">
            <h1 className="profile-heading">
               My <span>Profile</span>
            </h1>
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
  </div>     
  );
};

export default UserProfile;