import React from "react";
import Destination from '../../pages/destination/Destination';
import UserDashboard from "./UserDashboard";

function UserLayout() {
  
    return (
      <div>
        <UserDashboard />
        <Destination />
      </div>
      );
      }
      export default UserLayout;