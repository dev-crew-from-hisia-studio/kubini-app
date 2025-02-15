import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./view/assets/style/index.scss"
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);


