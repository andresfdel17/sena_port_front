import { BasePanel } from '@components/BasePanel';
import { Home } from '@components/Home';
import { Login } from '@components/Login';
import { useAuth } from '@contexts/AuthProvider';
import { PortectedProps } from '@interfaces/General';
import { DeviceIn } from '../pages';
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
          <BasePanel>
            {element}
          </BasePanel>
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
          <Route path="/device-in" element={<Protected element={<DeviceIn />} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter