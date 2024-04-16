"use client"

import React, { useEffect, useState } from 'react';
import ClientProfile from '../profile/_components/ClientProfile';
import MasterProfile from '../profile/_components/MasterProfile';
import AdminProfile from '../profile/_components/AdminProfile';

const ProfilePage = () => {
  const [userRoles, setUserRoles] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(sessionStorage.getItem('user'));

    if (!currentUser || !currentUser.accessToken) {
      console.error("Access token is missing:", currentUser);
      return; 
    }

    const tokenPayload = currentUser.accessToken.split('.')[1];
    const decodedToken = JSON.parse(atob(tokenPayload));
    console.log("Decoded token:", decodedToken);

    if (!decodedToken || !decodedToken.roles) {
      console.error("User roles are missing in decoded token:", decodedToken);
      return; 
    }
    setUserName(decodedToken.firstName);
    setUserLastName(decodedToken.lastName);
    setUserRoles(decodedToken.roles);
    setUserEmail(decodedToken.sub); 
  }, []);

  
  if (!userRoles) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-green-50 p-6 rounded-lg shadow-md">
      {userRoles === 'CLIENT' && <ClientProfile user={{ email: userEmail, name: userName, lastName: userLastName }} />}
      {userRoles === 'MASTER' && <MasterProfile user={{ email: userEmail, name: userName, lastName: userLastName }} />}
      {userRoles === 'ADMIN' && <AdminProfile user={{ email: userEmail, name: userName, lastName: userLastName }} />}
    </div>
  );
}

export default ProfilePage;

