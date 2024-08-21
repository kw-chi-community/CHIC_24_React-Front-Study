import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HW2 from './HW2';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>2023204086 유아름</h1>
        <button>
          <Link to="/hw2" style={{ textDecoration: 'none', color: 'inherit' }}>
            HW2
          </Link>
        </button>

        <Routes>
          <Route path="/hw2" element={<HW2 />} />
          <Route path="/" element={<div></div>} /> {/* 홈 페이지 내용 없음 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
