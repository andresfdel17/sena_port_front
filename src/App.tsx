import { LangProvider } from '@contexts/LanguageContext';
import { ThemeProvider } from '@contexts/ThemeContext';
import React from 'react';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        <AppRouter />
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
