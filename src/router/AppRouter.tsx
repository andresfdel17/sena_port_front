import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from "@components";
import { useAuth } from '@contexts';


const AppRouter = () => {
  const auth = useAuth();
  console.log(auth);
  
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
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter