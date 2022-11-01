import React from 'react';
import { LangProvider, ThemeProvider } from '@contexts';
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
