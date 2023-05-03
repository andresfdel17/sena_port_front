import { BasePanel } from '@components/BasePanel';
import { Home } from '@pages/Home';
import { Login } from '@components/Login';
import { useAuth } from '@contexts/AuthProvider';
import { PortectedProps } from '@interfaces/General';
import { DeviceIn } from '../pages';
import React, { Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Loader } from '@components/Loader/Loader';



const AppRouter = () => {
  const { isAutenticated } = useAuth();
  const Protected = ({ element }: PortectedProps) => {
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
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" >
              <Route path="/home" element={<Protected element={<Home />} />} />
            </Route>
            <Route path="/device-in" element={<Protected element={<DeviceIn />} />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  )
}

export default AppRouter