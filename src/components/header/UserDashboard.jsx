import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import Destination from '../../pages/destination/Destination';

const UserDashboard = () => {
  const [userType, setUserType] = useState("experiences"); // Initialize userType state

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (

   <div>
      <div className="bg-gray-100 font-sans w-full min-h-auto m-0">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-purple-600"
                viewBox="0 0 24 24"
              >
                {/* SVG Path Here */}
              </svg>
            </div>
  
            <div className="header-content--left">
              <Link to="/" className="logo"> 
                <a href="#" className="brand-logo">
                   <svg width="28"   
                        height="28"  
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.098.649A12.037 12.037 0 0 0 1.088 7h3.525C5.305 4.302 6.541 2.065 8.098.65ZM6.544 7C7.359 3.45 9.014.832 11 .166V7H6.544Zm-2.33 2H.378A12.022 12.022 0 0 0 0 12c0 1.403.24 2.749.683 4h3.703A20.558 20.558 0 0 1 4 12c0-1.032.074-2.037.214-3Zm2.127 7A23.07 23.07 0 0 1 6 12c0-1.036.066-2.041.189-3H11v7H6.341Zm-1.44 2H1.605a12.037 12.037 0 0 0 6.493 5.351c-1.36-1.237-2.475-3.1-3.197-5.35ZM11 23.834C9.205 23.232 7.681 21.037 6.803 18H11v5.834Zm4.902-.483a12.037 12.037 0 0 0 6.493-5.35h-3.296c-.722 2.25-1.837 4.113-3.197 5.35ZM17.197 18c-.878 3.037-2.402 5.232-4.197 5.834V18h4.197Zm2.417-2h3.703A11.98 11.98 0 0 0 24 12c0-1.036-.131-2.041-.378-3h-3.836c.14.963.214 1.968.214 3 0 1.396-.135 2.74-.386 4Zm-1.803-7c.123.959.189 1.964.189 3 0 1.403-.12 2.749-.341 4H13V9h4.811Zm-.355-2H13V.166C14.986.832 16.641 3.45 17.456 7Zm1.931 0c-.692-2.698-1.928-4.935-3.485-6.351A12.037 12.037 0 0 1 22.912 7h-3.525Z" />
                   </svg>
                   <span className="logo-text">
                    Travel<span className="text-orange-600 mr-7">Trove</span>
                  </span>
                </a>
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center">
              {/* Step 2: Replace anchor tags with Link components */}
              <select name="userType" value={userType} onChange={handleUserTypeChange}>
                 <option value="experiences">
                   <Link to="/experiences" className="text-gray-800 text-sm font-semibold hover:text-orange-600">
                     My Experiences
                   </Link>
                 </option>
                 <option value="packages">
                   <Link to="/packages" className="text-gray-800 text-sm font-semibold hover:text-orange-600">
                     My Packages
                   </Link>
                 </option>
                 <option value="destinations">
                   <Link to="/destination" className="text-gray-800 text-sm font-semibold hover:text-orange-600">
                     My Destinations
                   </Link>
                 </option>
              </select>
            </div>

            <div className="hidden sm:flex sm:items-center">
              <Link to="/profile" className="text-gray-800 text-sm font-semibold hover:text-orange-600 mr-6">
                My Profile
              </Link>
              <Link to= "/"  className="text-orange-600 text-sm font-semibold border px-3 py-2 rounded-lg hover:text-orange-600 hover:border-orange-600 hover:text-gray-800">
                 Log Out
              </Link>

            </div>
         </div>
        </div>
      </div>
    </div>
    <div>
      <Destination />
    </div>
   </div> 
    
  );
};

export default UserDashboard;