# React 개요
React는 웹 및 모바일 앱(View)을 개발하는 인기 있는 라이브러리이다. 일반적인 애플리케이션 개발에는 UI, UI를 컨트롤하는 로직, 데이터를 처리하는 비즈니스 로직이 필요하다. React는 이 중 UI 개발을 돕는다.

## React의 주요 특징
1. **선언형(Declarative)**:
   - UI를 구현하기 위해 결과물(View)을 선언적으로 작성한다. 즉, JSX 문법을 사용해 원하는 결과를 `<tag></tag>` 형식으로 구현한다.

2. **컴포넌트 기반(Component-Based)**:
   - 독립적인 컴포넌트 단위로 개발하여 재사용성을 높인다. 컴포넌트는 HTML, CSS, JavaScript를 포함하는 독립적인 코드 블록이다.

3. **재사용성(Reusability)**:
   - 컴포넌트를 만들어 다른 프로젝트나 화면에서도 재사용할 수 있다.

4. **가상 DOM(Virtual DOM)**:
   - 변경된 부분만 실제 DOM에 반영하여 성능을 최적화한다. 가상 DOM은 메모리에 존재하는 가짜 DOM 트리이다.

5. **JSX**:
   - 자바스크립트를 확장한 문법으로, HTML과 유사하지만 JavaScript로 변환된다.

## CSR vs SSR
- **CSR(Client-Side Rendering)**:
  - JavaScript 파일이 다운로드되고 실행된 후 화면이 렌더링된다.
  - 초기 로딩 속도가 느릴 수 있다.
  
- **SSR(Server-Side Rendering)**:
  - 서버에서 HTML을 렌더링하여 초기 로딩 속도가 빠르다.
  - JavaScript 파일이 다운로드되고 실행된 후 인터랙션이 가능하다.

## 리액트의 주요 모듈
1. **ReactDOM**:
   - React 컴포넌트를 실제 DOM에 렌더링하는 역할을 한다.
   - `ReactDOM.render(<Component />, document.getElementById('root'))` 형식으로 사용된다.

2. **React**:
   - 컴포넌트를 생성하는 라이브러리이다.

## 요약
React는 선언형, 컴포넌트 기반, 재사용성이 높은 UI 라이브러리로, 가상 DOM을 사용하여 성능을 최적화한다. CSR과 SSR 방식을 통해 다양한 렌더링 방법을 지원하며, JSX 문법을 통해 간결하게 UI를 정의할 수 있다. ReactDOM과 React 모듈을 사용하여 컴포넌트를 생성하고 실제 DOM에 렌더링한다.
