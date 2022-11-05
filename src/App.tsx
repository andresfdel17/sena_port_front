import { AuthProvider } from '@contexts/AuthProvider';
import { LangProvider } from '@contexts/LanguageContext';
import { ThemeProvider } from '@contexts/ThemeContext';
import React from 'react';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div style={{ height: "100%" }}>
      <AuthProvider>
        <ThemeProvider>
          <LangProvider>
            <AppRouter />
          </LangProvider>
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
