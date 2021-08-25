import React from 'react';
import './App.css';
import Reactstrap from './Reactstrap.js';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <body>
      <div id="wrap">
        <header id="header">
          <div class="headInner">
            <h1>songil</h1>
            <div class="menuList">
              <div class="item">커뮤니티</div>
              <div class="item">후원기업</div>
            </div>
          </div>
        </header>
      </div>

      <p align="middle">
        <p>기부해야하는 이유 동영상</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/80bNntJbUeg" 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
      </p>

      
        <div class="box">기부 리스트</div>
        <div class="box">기부 리스트</div>
        <div class="box">기부 리스트</div>
        <div class="box">기부 리스트</div>
      
    </body>
  );
}

export default App;