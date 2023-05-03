import { AuthProvider } from '@contexts/AuthProvider';
import { LangProvider } from '@contexts/LanguageContext';
import { ThemeProvider } from '@contexts/ThemeContext';
import React from 'react';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider>
          <LangProvider>
            <AppRouter />
          </LangProvider>
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
