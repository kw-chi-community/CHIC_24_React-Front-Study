
Quiz

---

1. 

_________는 URL의 Hash(#)를 이용한 라우터로, 서버에 GET 요청을 보내지 않아도 웹 페이지를 서빙받을 수 있도록 한다. 아래는 _________를 사용하는 코드의 일부이다.

```
import { HashRouter, Route, Routes, Link } from "react-router-dom";
...
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
...
```

1-1. 빈 칸을 채우세요
1-2. 빈 칸에 해당하는 router의 특징(혹은 단점) (hint: hash(#)의 특징에서 비롯됩니다)

---

2. 

아래 컴포넌트 NavLink의 빈칸에 알맞은 속성을 추가하고 이유를 작성하세요 

```
import { HashRouter, Route, Routes, NavLink } from "react-router-dom";
...
function App() {
  return (
    <div>
      <h1>hello react router DOM</h1>
      <ul>
        <li>
          <NavLink _____ to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      {/* react-router-dom v5에서는 Switch 컴포넌트를 사용하고, v6 이상에서는 Routes 컴포넌트를 사용 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}
```
