import React from "react";
import "../styles/Favorite1.css";
import sport1 from "../Favorite1/sport1.jpg";
import sport2 from "../Favorite1/sport2.jpg";
import sport3 from "../Favorite1/sport3.jpg";
import team1 from "../Favorite1/team1.jpeg";
import team2 from "../Favorite1/team2.jpeg";
import team3 from "../Favorite1/team3.jpeg";
import player1 from "../Favorite1/player1.jpg";
import player2 from "../Favorite1/player2.jpg";
import player3 from "../Favorite1/player3.jpg";
import cheer1 from "../Favorite1/cheer1.jpg";
import cheer2 from "../Favorite1/cheer2.jpg";
import cheer3 from "../Favorite1/cheer3.jpg";

function Favorite1() {
  return (
    <div className="favorite1-container">
      <section className="favorite1-category">
        <h2>좋아하는 스포츠</h2>
        <div className="favorite1-images">
          <img src={sport1} alt="Sport 1" className="favorite1-image" />
          <img src={sport2} alt="Sport 2" className="favorite1-image" />
          <img src={sport3} alt="Sport 3" className="favorite1-image" />
        </div>
        <p>
          제가 좋아하는 스포츠는 야구입니다. 고2 시절 학교 내에서 야구 열풍이
          불었을 때 입덕하게 되면서 현재까지 좋아하고 있습니다. 야구장의 에너지
          넘치는 응원 소리와 위에서 바라보는 경기장이 너무 예뻐서 직관가는 걸
          좋아합니다.
        </p>
      </section>

      <section className="favorite1-category">
        <h2>좋아하는 구단</h2>
        <div className="favorite1-images">
          <img src={team1} alt="Team 1" className="favorite1-image" />
          <img src={team2} alt="Team 2" className="favorite1-image" />
          <img src={team3} alt="Team 3" className="favorite1-image" />
        </div>
        <p>잠실야구장의 주인 "엘지트윈스"라는 구단을 좋아하고 있습니다.</p>
      </section>

      <section className="favorite1-category">
        <h2>좋아하는 선수</h2>
        <div className="favorite1-images">
          <img src={player1} alt="Player 1" className="favorite1-image" />
          <img src={player2} alt="Player 2" className="favorite1-image" />
          <img src={player3} alt="Player 3" className="favorite1-image" />
        </div>
        <p>
          유니폼 사고 처음으로 마킹 했던 홍창기 선수를 가장 좋아합니다. 응원가도
          신나고 팬 서비스도 항상 잘해줘서 좋아합니다.
        </p>
      </section>

      <section className="favorite1-category">
        <h2>좋아하는 응원가</h2>
        <div className="favorite1-images">
          <img src={cheer1} alt="Cheer 1" className="favorite1-image" />
          <img src={cheer2} alt="Cheer 2" className="favorite1-image" />
          <img src={cheer3} alt="Cheer 3" className="favorite1-image" />
        </div>
        <p>1. 승리의 노래(보통 이겼을 때 부르는 노래)</p>
        <p>2. Forever 엘지(저작권 때문에 현재는 쓰지 않지만)</p>
        <p>
          3. 서울의 아리아(보통 역전했을 때나 득점을 많이 했을 때 부르는 노래)
        </p>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Favorite Things</p>
      </footer>
    </div>
  );
}

export default Favorite1;
