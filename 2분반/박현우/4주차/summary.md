- <h3>react : 유저 인테페이스를 만들기 위한 라이브러리 (프레임워크 X)</h3>
- 핵심 : virtual DOM을 사용함.
장점)
- 컴포넌트 하나로 관리
- 서버 & 클라이언트 렌더링 - 서버 렌더링 -> 초기 구동 딜레이 & SEO (검색엔진최적화)
- 간편한 UI 수정 및 재사용
- 다른 프레임워크나 라이브러리와 혼용 가능
단점)
- VIEW ONLY
- IE8 이하 지원 x
<h3>jsx</h3>
```
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
 class Codelab extends React.Component{
 render(){  
   let text = "Hi I am codelab"
   let style = {
   backgroundColor:'aqua'
   }
   return(
   <div style = {style}>{text}</div>
   );
 }
 }

class App extends React.Component{
  render(){
    return(
     <Codelab/>
    );
  }
} 

ReactDOM.render(<App/>,document.getElementById('root'));
/// html <div id = "root"></div>
```

<h5>props</h5>
- 컴포넌트 내부의 Immutable Data
- JSX 내부에 {this.props.propsName}
- 컴포넌트를 사용할 때,<> 괄호 안에 propsName="value"
- this.props.childern은 기본적으로 갖고있는 props로서, <Cpnt>여기에 있는 값이 들어간다</Cpnt>

<h5>props 기본 값 설정</h5>
Component.defaultProps = {...}
- value : 0
<h5>Type 검증</h5>
Component.propTypes = {...}
<h3>실습 코드</h3>
```
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import PropTypes from "https://esm.sh/prop-types";

class Codelab extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h2>{this.props.number}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

Codelab.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired
};

Codelab.defaultProps = {
  name: 'Unknown'
};

class App extends React.Component {
  render() {
    return (
      <Codelab name={this.props.name} number={this.props.number}>
        {this.props.children}
      </Codelab>
    );
  }
}

ReactDOM.render(<App number={5}>I am your child</App>, document.getElementById('root'));

```
<h5>state</h5>
- 컴포넌트에서 유동적인 데이터를 보여줄 때 사용됨
- 초기값 설정이 필수, 생성자(constructor)에서 this.state = {}으로 설정
- 값을 수정할 때는 this.setState({...}), 렌더링 된 다음엔 this.state = 절대 사용 x
<h5>실습코드</h5>
```
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import PropTypes from "https://esm.sh/prop-types";

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:0
    };
  this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.setState({
      value:this.state.value + 1
    });
  }  
  render(){
    return(
    <div>
        <h2>{this.state.value}</h2>
        <button onClick = {this.handleClick}>Press Me</button>
          </div>
    )
  }
}


class App extends React.Component{
  
  render(){
    return(
    <Counter/>
    );
  }
};

ReactDOM.render(
<App></App>,
  document.getElementById("root")
); 
```

<h5>컴포넌트 매핑</h5>
- 데이터배열을 React에서 랜더링 할 때 JavaScript의 내장함수 map을 사용.
- map() 메소드는 파라미터로 전달 . 된함수를 통하여 배열 내의 각 요소를 처리해서 그 결과로 배열을 생성한다.
arr.map(callback,[thisArg])
- callback 1. currentValue(현재 처리되고 있는 요소) 2. index(현재 처리되고 있는 요소의 index 값) 3. array(메소드가 불려진 배열)
- thisArg(선택) - (callback 함수 내부에서 사용 할 this 값을 설정)
```
var numbers = [1,2,3,4,5];

var processed = numbers.map(function(num){
    return num*num;
});
```
```
/*ES6 Syntax*/
let numbers = [1,2,3,4,5];

let result = numbers.map((num) => {
    return num*num;
});

```

<h5>컴포넌트 매핑</h5>
- 배열의 랜더링
```
import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import PropTypes from "https://esm.sh/prop-types";

class ContactInfo extends React.Component{
  
  render(){
    return(
    <div>{this.props.contact.name}
        {this.props.contact.phone}
      
    </div>
    
    );
  }
}

class Contact extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      contactData:[
        {name: 'Abet',phone:'010-0000-0001'},
        {name: 'Betty',phone:'010-0000-0002'},
        {name: 'Charile',phone:'010-0000-0003'},
        {name: 'David',phone:'010-0000-0004'}
      ]
    }
    
  }
  
  
  render(){
    
    const mapToComponent = (data) =>{
    return data.map((contact,i)=> {
    return(<ContactInfo contact = {contact} key = {i}/>);
    
    });
    };
    
    
    return(
    <div>
 {mapToComponent(this.state.contactData)}
    </div>
    );
  }
}


class App extends React.Component{
  
  render(){
    return(
    <Contact/>
    );
  }
};

ReactDOM.render(
<App></App>,
  document.getElementById("root")
); 
```