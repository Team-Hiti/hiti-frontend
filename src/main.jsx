import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const body = document.body;

const root = ReactDOM.createRoot(body);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
