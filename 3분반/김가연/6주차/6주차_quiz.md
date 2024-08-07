# 6주차 퀴즈

**1. 다음 코드를 실행하면 페이지가 이동할 때마다 새로고침이 발생하는 문제가 발생한다. 그리고 URL에 #을 포함시켜 해당 경로로 들어오는 모든 사용자가 동일한 웹 페이지를 서비스 받을 수 있도록 코드를 수정하고 싶은 상황이다.
   코드를 조건에 맞게 수정하시오.**

  ```
//App.js 코드
  import React from 'react';
  import { BrowserRouter as Router, Route } from 'react-router-dom';
  
  function App() {
    return (
      <Router>
        <div>
          <a href="/home">Home</a>
          <a href="/about">About</a>
  
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
  ```

**2. HashRouter의 장점과 단점에 대해  o/x 로 답하시오**
   2-1. 서버 사이드 설정 없이 클라이언트 사이드 라우팅을 쉽게 처리할 수 있다 ( )
   2-2. 구형 브라우저나 특정 환경에서는 잘 작동하지 않는다. ( )
   2-3. URL이 길어지고, 사용자 경험 측면에서 덜 깔끔해 보일 수 있다. ( )
   2-4. URL에 #이 포함되어 있어 검색 엔진 최적화 측면에서 유리할 수 있다. ( )
