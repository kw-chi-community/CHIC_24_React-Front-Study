import React, { Component } from 'react';

class Subject extends Component {
    render() {
      console.log('Control render');

      return ( 
        <ul>
          <li><a href="/create" onClick={function(e) {
                e.preventDefault(); // 페이지 변경 방지 위한 함수 호출
                this.props.onChangeMode('create'); // 현재 mode가 무엇인지 알려줌
              }.bind(this)}>create</a></li>
          <li><a href="/update" onClick={function(e) {
                e.preventDefault();
                this.props.onChangeMode('update');
              }.bind(this)}>update</a></li>
          <li><input onClick={function(e) {
                e.preventDefault();
                this.props.onChangeMode('delete');
              }.bind(this)} type="button" value="delete"></input></li>
        </ul>
      );
    }
}

export default Subject;
