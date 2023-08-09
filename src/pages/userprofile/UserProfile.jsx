
import React, { useState, useEffect } from 'react';
import './UserProfile.css'; // Import the CSS file

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the backend API and set it to the state
    // Replace this with your actual API call to get user data
    // For example: fetchUserDataFromBackend(userId).then((data) => setUserData(data));
    const fakeUserData = {
      firstName: 'John',
      lastName: 'Doe',
      username: 'johndoe123',
      email: 'johndoe@example.com',
    };
    setUserData(fakeUserData);
  }, []);

  const handleEditProfile = () => {
    // Redirect to the user profile form
    // Replace '/edit-profile' with the actual URL for the edit profile page
    window.location.href = '/edit-profile';
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
