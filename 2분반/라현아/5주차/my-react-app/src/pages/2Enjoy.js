import React from 'react';
import './2Enjoy.css';

function Enjoy() {
  return (
    <div className="enjoy-container effect">
      <h2>ENJOY</h2>
      <div className="hobbies">
        <div className="hobby-card reading">
          <span className="icon">📚</span>
          <span className="label">Reading Novels</span>
        </div>
        <div className="hobby-card drawing">
          <span className="icon">🎨</span>
          <span className="label">Drawing</span>
        </div>
        <div className="hobby-card music">
          <span className="icon">🎵</span>
          <span className="label">Listening to Music</span>
        </div>
        <div className="hobby-card game">
          <span className="icon">🕹️</span>
          <span className="label">Playing Games</span>
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

export default Enjoy;
