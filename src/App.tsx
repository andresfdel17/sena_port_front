import React from 'react';
import './App.css';
import { LangProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <LangProvider>
        
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
