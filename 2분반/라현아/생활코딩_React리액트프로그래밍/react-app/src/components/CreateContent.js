import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
      console.log('Content render');

      return ( 
        <article>
                <h2>Create</h2>
                <form action='/create_process' method="post" // 지정된 페이지로 사용자가 입력한 정보를 전송POST할 것이다
                    onSubmit={function(e) {
                    e.preventDefault();
                    this.props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                    );
                    alert('Submit!!!!!');
                    }.bind(this)}
                >
                    <p><input type="text" name="title" placeholder="title"></input></p>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                </form>
        </article>
      );
    }
}

export default CreateContent;
