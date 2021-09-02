import React, { Component} from 'react';
import './App.css';

class App extends Component {

  //属性を定義
  title = "初期値のタイトルです";
  message = "初期値のメッセージです";

  //コンストラクターを定義
  constructor(props) {
    super();
    this.title = props.title;
    this.message = props.message;
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <p>{this.message}</p>
      </div>
    );
  }
}

export default App;
