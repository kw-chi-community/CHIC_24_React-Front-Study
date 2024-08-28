import React, { Component } from 'react';

class Nav extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    fetch('list.json')
      .then((result) => result.json())
      .then((json) => {
        console.log(json);
        this.setState({ list: json });
      })
      .catch((error) => {
        console.error('Error fetching list:', error);
      });
  }

  render() {
    const listTag = this.state.list.map((li) => (
      <li key={li.id}>
        <a href={li.id}>{li.name}</a> {/* Adding the content inside the anchor */}
      </li>
    ));

    return (
      <nav>
        <ul>
          {listTag}
        </ul>
      </nav>
    );
  }
}

class Article extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    );
  }
}

class App extends Component {
  state = {
    article: { title: 'Welcome', desc: 'Hello, React & Ajax' }
  }
  render() {
    return (
      <div className="App">
        <h1>WEB</h1>
        <Nav />
        <Article title={this.state.article.title} desc={this.state.article.desc} />
      </div>
    );
  }
}

export default App;
