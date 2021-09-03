import { sortedLastIndex } from 'lodash';
import React, { Component} from 'react';
import Member from './Member';
import './App.css';

class App extends Component {

  msgStyle = {
    fontSize: "24px",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solid #900"
  }
  btnStyle = {
    fontSize: "20px",
    padding: "0px 10px"
  }
  //コンストラクターを定義
  constructor(props) {
    super();
    this.state = {
      msg: "Hello"
    };
    //関数を定義する
    let timer = setInterval(()=>{
      this.setState((state)=>({
        msg: state.msg + "!"
      }));
    }, 5000);
  }

  render() {
    return (
      <div>
        <h1>React</h1>
        <p style={this.msgStyle}>{this.state.msg}</p>
        <p style={this.msgStyle}>{this.props.msg}</p>
      </div>
    );
  }
}

export default App;
