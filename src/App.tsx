import { AuthProvider } from '@contexts/AuthProvider';
import { ThemeProvider } from '@contexts/ThemeContext';
import React from 'react';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
            <AppRouter />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
