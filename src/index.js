import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter  basename={process.env.PUBLIC_URL}>
      <RouteSwitch />
    </BrowserRouter>
  </React.StrictMode>
);
