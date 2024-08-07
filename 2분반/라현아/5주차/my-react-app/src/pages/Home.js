import React from 'react';
import './Home.css';

function Home() {
  return (
    <div id="about-me">
      <div className="inner-left">
        <h1>ABOUT ME</h1>
        <p className="pic"></p>
      </div>
      <div className="inner-right">
        <ul>
          <li>  
            <strong>라현아 2004. 08. 14</strong><br />
            🏆 2019.02- KAIST IP-CEO 10기<br />
            🎓 2023.03- KWU 정보융합학부 VT전공<br />
            <br />
            <strong>교내 동아리</strong><br />
            💻 2023.03- 컴퓨터/프로그래밍 COM's 57기<br />
            🌐 2023.09- Google Developer Student Clubs 1기<br />
            🎮 2023.12- App+Game+Design LogIn 12기 (쉬는중)<br />
            🕹️ 2023.12- 게임개발 LEVEL UP<br />
            🧠 2024.06- HCI 전공 소모임 CHIC 3.2기<br />
            🚀 2024.08- 9roomthon UNIV 3기<br />
          </li> 
        </ul>
      </div>
    </div>
  );
}

export default Home;
