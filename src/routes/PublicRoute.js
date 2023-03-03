import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { tokenSelector } from 'redux/auth-slice/auth-slice';

export const PublicRoute = () => {
  const isAuth = useSelector(tokenSelector);

  return !isAuth ? <Outlet /> : <Navigate to="/" />;
};
