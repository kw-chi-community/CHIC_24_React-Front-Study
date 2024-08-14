Quiz

---

1.

아래는 Nav 컴포넌트의 목록 내용을 비동기 정보 교환 기법인 Ajax를 통해 가져오는 컴포넌트 Nav입니다. 

1-1. 잘못된 부분(한 곳)을 찾아 수정하고 

1-2. 빈칸을 채우세요.


```
import React, { Component } from "react";

class Nav extends Component {
  state = {
    list: [],
  };
  componentWillMount() { // componentDidMount, 컴포넌트가 렌더링 되기 전에 데이터를 가져와야 한다.
    fetch("list.json")
      .then(function (result) {
        return result.json();
      })
      .then(
        function (json) {
          console.log(json);
          this.________({ list: json }); // setState, json 파일에서 읽어들여온 데이터를 state로 전달해, 이를 render에서 처리하도록 한다.
        }.bind(this)
      );
  }
  render() {
    var listTag = [];
    for (var i = 0; i < this.state.list.length; i++) {
      var li = this.state.list[i];
      listTag.push(
        <li key={li.id}>
          <a href={li.id}>{li.title}</a>
        </li>
      );
    }
    return (
      <nav>
        <ul>{listTag}</ul>
      </nav>
    );
  }
}
...(생략)...
```

---

2. 

아래는 NowLoading 컴포넌트와 웹 페이지 로딩 중 NowLoading 컴포넌트를 표시하기 위해 수정된 App 컴포넌트입니다. 빈 칸을 채우세요.

```
class NowLoading extends Component {
  render() {
    return <div>Now Loading...</div>;
  }
}
```
```
class App extends Component {
  state = {
    article: {
      item: { title: "welcome", desc: "hello, React & Ajax" },
      isLoading: false,
    },
    list: { items: [], isLoading: false },
  };

  componentDidMount() {
    ...(생략)...
  }

  render() {
    var NavTag = null;
    if (__________________________) { // this.state.list.isLoading, loading 중인 상태일 때 NowLoading 컴포넌트가 표시되도록 한다.
      NavTag = <NowLoading />;
    } else {
      NavTag = (
        <Nav
          list={this.state.list.items} 
          onClick={function (id) {
            var newArticle = Object.assign({}, this.state.article, {
              isLoading: true,
            });
            this.setState({ article: newArticle });
            fetch(id + ".json")
              .then(function (result) {
                return result.json();
              })
              .then(
                function (json) {
                  this.setState({
                    article: {
                      item: {
                        title: json.title,
                        desc: json.desc,
                      },
                      isLoading: false,
                    },
                  });
                }.bind(this)
              );
          }.bind(this)}
        />
      );
    }

    var ArticleTag = null;
    if (this.state.article.isLoading) { // 힌트
      ArticleTag = <NowLoading />;
    } else {
      ArticleTag = (
        <Article
          title={this.state.article.item.title}
          desc={this.state.article.item.desc}
        />
      );
    }

    return (
      <div className="App">
        <h1>WEB</h1>
        {NavTag}
        {ArticleTag}
      </div>
    );
  }
}
```
