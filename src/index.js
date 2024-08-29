import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWrapper from './AppWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <AppWrapper />
  </Router>
);
