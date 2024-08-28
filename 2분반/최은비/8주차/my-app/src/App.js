import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ConvPage from './components/ConvPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/conv" element={<ConvPage />} />
            </Routes>
        </Router>
    );
}

export default App;
