import React, { Component} from 'react';
import './App.css';

let data = {
  title: 'Title',
  message: 'This is sample message',
  description: '説明文を記載致します。'
}

//コンテキストを設定
const SampleContext = React.createContext(data);

class App extends Component {
  
  newdata = {
    title: 'プロバイダーで変更をしたタイトルです。',
    message: 'プロバイダーで変更をしたメッセージです。',
    description: 'プロバイダーで変更をした説明文です。'
  }

  render() {
    return (
      <div>
        <h1>Context</h1>
        <SampleContext.Provider value={this.newdata}>
          <Title />
          <Message />
        </SampleContext.Provider>
        <Title />
        <Message />
        <Title />
        <Message />
      </div>
    )
  }
}

class Title extends Component {
  // コンテキストを使えるように定義する
  static contextType = SampleContext;
  render() {
    return (
      <div>
        <h2>{this.context.title}</h2>
        <h2>{this.context.description}</h2>
      </div>
    )
  }
}

class Message extends Component {
  //コンテキストを使えるように設定する
  static contextType = SampleContext;

  render() {
    return(
      <div>
        <h2>{this.context.message}</h2>
      </div>
    )
  }
}

export default App;
