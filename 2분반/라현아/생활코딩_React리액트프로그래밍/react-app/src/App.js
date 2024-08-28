import React, { Component } from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Subject from './components/Subject';
import Control from './components/Control'

class App extends Component {
  // App 컴포넌트의 constructor 작성
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode:'read',
      selected_content_id: 2,
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'}, 
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    console.log('App render');
    var _title, _desc, _article = null;
    if(this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read') {
      var i = 0;
      while(i < this.state.contents.length) {
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) { // 두 값이 일치하는 것이 발견되면
          _title = data.title; // _title과 _desc의 값을 변경하고
          _desc = data.desc;
          break; // breakdm로 while 문 빠져나감
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title, _desc) {
        // Create의 onSubmit 이벤트가 발생했을 때 입력받은 onSubmit props가 실행되고, 이에 따라 App 컴포넌트의 state.contents에 우리가 입력한 데이터가 추가되게 구현해야 함
        this.max_content_id = this.max_content_id+1; // onSubmit이 실행될 때마다 this.max_content_id 값을 1만큼 증가시켜서 새로 추가될 항목의 id로 지정
        this.state.contents.push(
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        this.setState({
          contents:_contents
        });
        console.log(_title, _desc);
      }.bind(this)}></CreateContent>
    }
    
    console.log("render", this);
    return ( 
      // 최상위 태그: div
      <div className="App">
        <Subject 
          title={this.state.subject.title} // state 초기화: state 값으로 Subject 컴포넌트의 props 값 설정
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode:'welcome'});
          }.bind(this)}></Subject>
        <TOC 
          onChangePage={function(id) {
            this.setState({ 
              mode:"read",
              selected_content_id:Number(id)
            });
          }.bind(this)}
          data={this.state.contents}></TOC>
        <Control 
          onChangeMode={function(_mode) {
            this.setState({ 
              mode:_mode
            });
          }.bind(this)}></Control>
          {_article}
      </div>
    );
  }
}

export default App;
