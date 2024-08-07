import React from 'react';
import './1Study.css';

function Study() {
  return (
    <div className="study-container effect">
      <h2>STUDY</h2>
      <div className="interest">
        <div className="interest-item web-frontend">
          <span className="icon">🌐</span>
          <span className="label">Web-Frontend</span>
        </div>
        <div className="interest-item game-client">
          <span className="icon">🎮</span>
          <span className="label">Game-Client</span>
        </div>
        <div className="interest-item design">
          <span className="icon">🖼️</span>
          <span className="label">Design/Illustration</span>
        </div>
        <div className="interest-item talk">
          <span className="icon">💬</span>
          <span className="label">Language</span>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
        Curabitur bibendum felis sit amet magna fermentum, at condimentum nisi auctor. 
        Nulla facilisi. Mauris ultricies nibh vitae nisi feugiat, id aliquam turpis consequat. 
        Fusce id magna sapien. Duis facilisis leo vel est interdum, non venenatis augue suscipit. 
        Donec ornare libero ac lacus egestas, non vestibulum nisi varius. Integer et sem nec risus 
        volutpat euismod. Phasellus et turpis mauris. Proin vitae arcu id libero dapibus malesuada et 
        vitae magna. Sed suscipit consequat sem. Praesent cursus ante ut erat suscipit, ac fringilla 
        elit posuere.
      </p>
      <p>
        Donec cursus dolor in elit luctus, non gravida tortor consequat. In ac augue libero. Fusce 
        varius tortor eu interdum cursus. Nulla facilisi. Aenean euismod neque quis lectus ultricies, 
        eu vehicula orci tristique. Vestibulum ac odio vitae metus pretium ultrices ut eget est. 
        Nam ac erat id felis tincidunt dapibus non in quam. Phasellus euismod ex sit amet eros laoreet, 
        sit amet dictum odio vestibulum. Duis vulputate libero et sem consectetur, nec dignissim 
        quam malesuada. Cras tincidunt ligula eu auctor varius. Ut suscipit sem nec lectus ultrices 
        gravida.
      </p>
    </div>
  );
}

export default Study;
