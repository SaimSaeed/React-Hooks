import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// importing the context
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // wrap the context provider of each context that you use to use the context
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

