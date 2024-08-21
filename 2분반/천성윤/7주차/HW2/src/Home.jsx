// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; //아래에 convolutionPage로 이동 링크

const Home = () => {
  return (
    <div>
      <h1>2021204093 천성윤</h1>
      <Link to="/convolution">  
        <button>H2</button>
      </Link>
    </div>
  );
};

export default Home;
