import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="hero-banner">
        <h1>나의 취미 소개 페이지</h1>
        <p>광운대학교 정보융합학부 23학번 최은비</p>
      </header>
      <footer className="footer">
        <p>&copy; 2024 Favorite Things</p>
      </footer>
    </div>
  );
}

export default Home;
