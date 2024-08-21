// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import ConvolutionPage from './ConvolutionPage';
//아래에 Home, ConvolutionPage와 연결
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/convolution" element={<ConvolutionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
