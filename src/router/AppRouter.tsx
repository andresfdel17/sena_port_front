import { Login } from '@components/Login';
import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'



const AppRouter = () => {
  /*const Protected = ({ children }: Props) => {
    const pathname = useLocation();
    switch (true) {
      case (!isAutenticated()):
        return <Navigate to="/login" />
      default:
        return (
          <>
            {children}
          </>
        );
    }
  }*/
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter