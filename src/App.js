import { sortedLastIndex } from 'lodash';
import React, { Component} from 'react';
import './App.css';

class App extends Component {

  //コンストラクターを定義
  constructor(props) {
    super();
    this.title = props.title;
    this.message = props.message;
  }

  render() {
    return (
      <div>
        <h1>React</h1>
        <Member name="宇野拓哉" message="よろしくお願いします" age="29" />
        <Member name="斎藤和成" message="Reactの勉強中です" age="35" />
        <Member name="近藤勇" message="JSの勉強もしていきたいです" age="18" /> 
      </div>
    );
  }
}

class Member extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.message = props.message;
    this.age = props.age;
    this.style = {
      border: "2px solid black",
      margin: "3px"
    }
  }

  render() {
    return (
      <div style={this.style}>
        <p>{this.name}</p>
        <p>{this.message}</p>
        <p>{this.age}</p>
      </div>
    )
  }
}

export default App;
