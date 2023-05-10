import { AuthProvider } from '@contexts/AuthProvider';
import { ThemeProvider } from '@contexts/ThemeContext';
import React from 'react';
import AppRouter from './router/AppRouter';
import { AxiosProvider } from '@contexts/AxiosContext';

function App() {
  return (
    <>
      <AuthProvider>
        <AxiosProvider>
          <ThemeProvider>
            <AppRouter />
          </ThemeProvider>
        </AxiosProvider>
      </AuthProvider>
    </>
  );
}

export default App;
