import React, { Component } from 'react';

class Subject extends Component { 
    //Subject 컴포넌트를 만들겠다라는 클래스 선언
    render() { 
      // 함수 (function 키워드 생략)
      console.log('Subject render');
      return ( 
        // 반드시 하나의 태그만 return 가능
        // 최상위 태그로 시작: header
        <header>
              <h1><a href="/" onClick={function(e) {
                e.preventDefault();
                this.props.onChangePage();
              }.bind(this)}>{this.props.title}</a></h1>
              {this.props.sub}
        </header>
      );
    }
}

export default Subject;

