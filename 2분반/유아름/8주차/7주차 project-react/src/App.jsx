import React from 'react'; // React 라이브러리 가져오기
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // React Router DOM 라이브러리에서 필요한 컴포넌트 가져오기
import HW2 from './HW2'; // HW2 컴포넌트 가져오기

function App() {
  return (
    <Router> {/* React Router의 Router 컴포넌트로 애플리케이션에 라우팅 기능 추가 */}
      <div className="App"> {/* 애플리케이션의 주 컨테이너 div */}
        <h1>2023204086 유아름</h1> {/* 페이지 상단에 표시되는 제목 */}

        <nav>
          {/* 네비게이션 메뉴를 정의하는 부분 */}
          <button>
            {/* 링크를 포함한 버튼 */}
            <Link to="/hw2" style={{ textDecoration: 'none', color: 'inherit' }}>
              HW2
            </Link>
          </button>
        </nav>

        <Routes>
          {/* URL 경로와 컴포넌트를 매핑하는 라우트 정의 */}
          <Route path="/hw2" element={<HW2 />} /> {/* '/hw2' 경로에 HW2 컴포넌트를 렌더링 */}
          <Route path="/" element={<div>홈 페이지</div>} /> {/* '/' 경로에 홈 페이지를 렌더링 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App; // App 컴포넌트를 다른 파일에서 사용할 수 있도록 내보내기
