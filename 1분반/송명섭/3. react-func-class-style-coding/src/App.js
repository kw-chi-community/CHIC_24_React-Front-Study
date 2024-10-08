import React, { useState } from 'react'; // useState - FuncComp에서 훅 사용하기 위해
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Hello World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}


function FuncComp(props) {
  var numberState = useState(props.initNumber);
  var number = numberState[0];
  var setNumber = numberState[1];

  // var dateState = useState((new Date()).toString());
  // var _date = dateState[0];
  // var setDate = dateState[1];

  var [_date, setDate] = useState((new Date().toString())); // 위 3줄을 간결하게 1줄로
  console.log('numberState', numberState);
  return (
    <div className='container'>
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={
        function () {
          setNumber(Math.random());
        }
      }></input>
      <input type="button" value="date" onClick={
        function () {
          setDate((new Date()).toString());
        }
      }></input>
    </div>
  );
}


var classStyle = 'color:red';
class ClassComp extends React.Component {
  // state 정의
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  // 라이프사이클 확인용 코드(render 이전에 호출)
  componentWillMount() {
    console.log('%cclass => componentWillMount', classStyle);
  }
  componentDidMount() {
    console.log('%cclass => componentDidMount', classStyle);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', classStyle);
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate', classStyle);
  }
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate', classStyle);
  }
  render() {
    console.log('%cclass => render', classStyle);
    return (
      <div className='container'>
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>

        <input type="button" value="random" onClick={
          function () {
            this.setState({ number: Math.random() });
          }.bind(this)
        }></input>

        <input type="button" value="date" onClick={
          function () {
            this.setState({ date: (new Date()).toString() });
          }.bind(this)
        } ></input >
      </div >
    );
  }
}
export default App;