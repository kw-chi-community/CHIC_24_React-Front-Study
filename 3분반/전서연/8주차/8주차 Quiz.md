Quiz

아래 빈 칸을 채우세요

---

1.

Redux Store에서는 아래와 같이 ______이 state 변경에 필요한 정보를 제공하고 state 변경을 요청하는 역할을 한다.

```jsx
import { createStore } from "redux";

export default createStore(function (state, ______) {
  if (state === undefined) {
    return { number: 0 };
  }
  if (______.type === "INCREMENT") {
    return { ...state, number: state.number + ______.size };
  }
  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

```

---

2. 

Redux 스토어에서 리듀서 함수를 호출, 현재 상태와 액션을 인자로 받아 새로운 상태로 업데이트하기 위해 store.________ 메서드를 사용한다.

```jsx
import AddNumber from "../components/AddNumber";
import React, { Component } from "react";
import store from "../store";

export default class extends Component {
  render() {
    return (
      <AddNumber
        onClick={function (size) {
          store.________({ type: "INCREMENT", size: size });
        }.bind(this)}
      ></AddNumber>
    );
  }
}

```
