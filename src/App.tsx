import { LangProvider } from '@contexts/LanguageContext';
import { ThemeProvider } from '@contexts/ThemeContext';
import React from 'react';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div style={{ height: "100%" }}>
      <ThemeProvider>
        <LangProvider>
          <AppRouter />
        </LangProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
