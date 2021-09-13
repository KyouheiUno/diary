import React, { Component} from 'react';
import './App.css';

//コンポーネントを定義
class App extends Component {

  //メッセージのスタイルを設定
  msgStyle = {
    fontSize: "20pt",
    color: "#900",
    margin: "20px 0px",
    padding: "5px"
  }

  //コンストラクターを定義
  constructor(props) {
    super(props);
    this.state = {
      message: "type your name"
    };
  //関数のバインド処理
  this.doChange = this.doChange.bind(this);
  this.doSubmit = this.doSubmit.bind(this);
  }

  //chengeメソッドを定義
  doChange(event) {
    this.input = event.target.value;
  }

  //doSubmitメソッドを定義
  doSubmit(event) {
    this.setState({
      message: "Hello, " + this.input + "!!"
    });
    event.preventDefault(); //デフォルトの機能を抑止するメソッド
  }

  render(){
    return(
      <div>
        <h1>React</h1>
        <Message title="Children!">
          これはコンポーネント内のコンテンツです。
          マルでテキストを分割し、リストにして表示しています。
          改行は必要ありません。
        </Message>
      </div>
    )
  }
}

class Message extends Component {

  li = {
    fontSize: "16pt",
    color: "#06",
    margin: "0px",
    padding: "0px"
  }

  render() {
    let content = this.props.children;
    let array = content.split("。");
    let array2 = [];
    for(let i = 0; i < array.length; i++) {
      if(array[i].trim() !== ""){
        array2.push(array[i]);
      }
    }

    let list = array2.map( (value, key) => (
      <li style={this.li} key={key}>{value}.</li>
    ));
    return ( 
      <div>
        <h2>{this.props.title}</h2>
        <ol>{list}</ol>
      </div>
    )
  }
}

export default App;
