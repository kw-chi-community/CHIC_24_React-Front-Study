import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Study from './pages/1Study';
import Enjoy from './pages/2Enjoy'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <blockquote class="quote">
          <p>“In den alten Zeiten, als das Wünschen noch geholfen hat...”</p>
          <cite>오래전, 아직 사람들이 무언가를 위해 소원을 빌 적에.</cite>
        </blockquote>
      </header>
      <main>
        <section id="home">
        <Home />
        </section>
        <section id="study">
          <Study />
        </section>
        <section id="enjoy">
          <Enjoy />
        </section>
      </main>
      <footer>
        <address>
          본 페이지는 상업적 목적이 아닌 개인 프로젝트용으로 제작되었습니다. <br />
          &copy; 2024 La, Hyeon-a. All Rights Reserved.
        </address>
      </footer>
    </div>
  );
}

export default App;
