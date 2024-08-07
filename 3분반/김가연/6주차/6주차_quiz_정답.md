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

2. **O, X, O, X** <br>
2-1. HashRouter 컴포넌트로 교체했을 서버 사이드 설정 없이 클라이언트 사이드 라우팅을 쉽게 처리할 수 있다. = 웹 서버 설정 불필요 <br>
2-2. 구형 브라우저나 특정 환경에서도 잘 동작합니다 = 호환성 증가 <br>
2-3. URL에 # 포함되어 URL이 길어지고, 사용자 경험 측면에서 덜 깔끔해 보일 수 있다. <br>
2-4. URL에 #이 포함되어 있어 검색 엔진 최적화(SEO) 측면에서 불리하다. 웹 서버는 #뒤 URL을 읽지 않는다.
