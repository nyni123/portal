import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MenuBars from "../components/Menu";
import Sidebar from "../components/Sidebar";
import Taskbar from "../components/Taskbar";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');
        if (!token) {
          setError('No token found. Please log in.');
          return;
        }

        // Fetch user data from the backend
        const response = await axios.get('http://18.224.5.169:5000/api/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        console.log(response.data)
        // Set user data
        setUser(response.data);
      } catch (err) {
        setError(err.response?.data?.msg || 'Failed to fetch user data.');
      }
    };

    fetchUserData();
  }, []);

  return (
    // <div className="flex items-center justify-center h-screen bg-gray-100">
    //   <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
    //     <h1 className="text-2xl font-bold text-gray-800 mb-4">
    //       Welcome to the Dashboard
    //     </h1>

    //     {error && <p className="text-red-500">{error}</p>}

    //     {user ? (
    //       <div>
    //         <p className="text-gray-600">First Name: {user.firstName}</p>
    //         <p className="text-gray-600">Last Name: {user.lastName}</p>
    //         <p className="text-gray-600">Email: {user.email}</p>
    //       </div>
    //     ) : (
    //       !error && <p className="text-gray-600">Loading user data...</p>
    //     )}
    //   </div>
    // </div>
    <div className="">
      <MenuBars user={user} />
      <main className="flex bg-white">
        <Sidebar user={user} />
        <Taskbar />
      </main>
    </div>
  );
};

export default Dashboard;
