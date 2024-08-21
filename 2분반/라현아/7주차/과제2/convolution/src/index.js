import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import First from './pages/First';
import Second from './pages/Second';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/second" element={<Second />} />
      </Routes>
    </Router>
  </React.StrictMode>
);