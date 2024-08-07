# 6주차 퀴즈 정답

1. ```
   import React from 'react';
   import { HashRouter as Router, Route, Link } from 'react-router-dom';
  
   function App() {
     return (
       <Router>
         <div>
           <Link to="/home">Home</Link>
           <Link to="/about">About</Link>
  
           <Route path="/home" component={Home} />
           <Route path="/about" component={About} />
         </div>
       </Router>
     );
   }
   ```

  - BrowserRouter 컴포넌트를 HashRouter로 교체. HashRouter 태그는 index.js에 쓰면 되기 때문에 App.js 코드에선 import 문만 수정
  - <a> 태그를 react-router-dom의 Link 컴포넌트로 교체하여 페이지 새로고침 없이 라우팅을 처리, <a> 태그의 href 속성을 Link 컴포넌트의 to 속성으로 변경

2. O, O, X, X
