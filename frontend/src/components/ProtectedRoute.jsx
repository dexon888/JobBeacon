// src/components/ProtectedRoute.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/authSlice';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectUser);
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
