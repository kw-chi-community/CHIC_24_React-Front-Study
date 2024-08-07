import React from "react";
import "../styles/Favorite2.css"; // CSS 파일명 변경
import ott1 from "../Favorite2/ott1.jpeg";
import ott2 from "../Favorite2/ott2.jpeg";
import ott3 from "../Favorite2/ott3.jpeg";
import drama1 from "../Favorite2/drama1.jpeg";
import drama2 from "../Favorite2/drama2.png";
import drama3 from "../Favorite2/drama3.png";
import actor1 from "../Favorite2/actor1.jpg";
import actor2 from "../Favorite2/actor2.jpg";
import actor3 from "../Favorite2/actor3.jpg";
import ost1 from "../Favorite2/ost1.jpg";
import ost2 from "../Favorite2/ost2.jpg";
import ost3 from "../Favorite2/ost3.jpg";

function Favorite2() {
  return (
    <div className="favorite2-container">
      <section className="favorite2-category">
        <h2>좋아하는 OTT</h2>
        <div className="favorite2-images">
          <img src={ott1} alt="ott 1" className="favorite2-image" />
          <img src={ott2} alt="ott 2" className="favorite2-image" />
          <img src={ott3} alt="ott 3" className="favorite2-image" />
        </div>
        <p>아무 약속도 없는 날 하루종일 침대에 누워 OTT 보는 걸 좋아합니다</p>
      </section>
      <section className="favorite2-category">
        <h2>좋아하는 OTT 드라마</h2>
        <div className="favorite2-images">
          <img src={drama1} alt="drama 1" className="favorite2-image" />
          <img src={drama2} alt="drama 2" className="favorite2-image" />
          <img src={drama3} alt="drama 3" className="favorite2-image" />
        </div>
        <p>재미있게 봤던 드라마를 가져왔습니다</p>
      </section>
      <section className="favorite2-category">
        <h2>좋아하는 배우</h2>
        <div className="favorite2-images">
          <img src={actor1} alt="actor 1" className="favorite2-image" />
          <img src={actor2} alt="actor 2" className="favorite2-image" />
          <img src={actor3} alt="actor 3" className="favorite2-image" />
        </div>
        <p>
          중3 때 어하루를 본 후로 지금까지 6년 째 응원하고 있는 배우입니다~!
        </p>
      </section>
      <section className="favorite2-category">
        <h2>좋아하는 OST</h2>
        <div className="favorite2-images">
          <img src={ost1} alt="ost 1" className="favorite2-image" />
          <img src={ost2} alt="ost 2" className="favorite2-image" />
          <img src={ost3} alt="ost 3" className="favorite2-image" />
        </div>
        <p>ost 하면 가장 먼저 떠오를 만큼 좋아하는 ost</p>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Favorite Things</p>
      </footer>
    </div>
  );
}

export default Favorite2;
