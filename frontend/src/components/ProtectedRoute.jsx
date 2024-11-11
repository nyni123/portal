// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // Check if the auth token is present in localStorage
  return localStorage.getItem('token') ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
