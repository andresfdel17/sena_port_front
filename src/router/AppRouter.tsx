import { Home } from '@components/Home';
import { Login } from '@components/Login';
import { useAuth } from '@contexts/AuthProvider';
import { PortectedProps } from '@interfaces/General';
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'



const AppRouter = () => {
  const { isAutenticated } = useAuth();
  const Protected = ({element}: PortectedProps) => {
    switch (true) {
      case (!isAutenticated()):
        return <Navigate to="/login" />
      default:
        return (
          <>
            {element}
          </>
        );
    }
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Protected element={<Home />} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter