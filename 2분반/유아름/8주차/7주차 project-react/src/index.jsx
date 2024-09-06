import React from 'react'; // React 라이브러리 가져오기
import ReactDOM from 'react-dom/client'; // ReactDOM 라이브러리에서 'client' 모듈 가져오기
import App from './App'; // 'App' 컴포넌트 가져오기

// 'root'라는 ID를 가진 DOM 요소를 찾고, ReactDOM.createRoot()를 사용해 React의 루트 컨테이너 생성
const root = ReactDOM.createRoot(document.getElementById('root'));

// 'root' 컨테이너에 React 애플리케이션 렌더링
root.render(
  <React.StrictMode> {/* React의 StrictMode를 사용하여 개발 모드에서의 경고 및 검사 활성화 */}
    <App /> {/* 'App' 컴포넌트를 렌더링 */}
  </React.StrictMode>
);
