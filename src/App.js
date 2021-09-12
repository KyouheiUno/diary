import { sortedLastIndex } from 'lodash';
import React, { Component} from 'react';
import Member from './Member';
import './App.css';
import Q from 'q';

//コンポーネントを定義
class App extends Component {

  data = [
    "これはリストのサンプルです",
    "配列をリストに変換します",
    "This is list sample"
  ]

  //テーブルのデータを設定
  tableData = [
    "名前",
    "生年月日",
    "身長",
    "体重",
    "性別"
  ]
  //テーブルのセルのデータを設定
  tableValue = [
    "宇野恭平",
    "19920726",
    "175",
    "67",
    "男"
  ]
  //テーブルの枠のスタイルを設定
  tableStyle = {
    border: "1px solid black",
    padding: "8px"
  }
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
      list: this.data
    };
  }

  render(){
    return (
      <div>
        <h1>React</h1>
        <h2 style={this.msgStyle}>show list.</h2>
        <List title="サンプル・リスト" data={this.data} />
        <table style={this.tableStyle}>
          <tr>
            {this.tableData.map( (items) =>
              <Table value={items} tableStyle={this.tableStyle}/> )
            }
          </tr>
          <tr>
            {this.tableValue.map( (items) =>
              <Table value={items} tableStyle={this.tableStyle}/> )
            }
          </tr>
        </table>
      </div>
    )
  }
}

//リストコンポーネントを新たに定義
class List extends Component {
  number = 1;

  title = {
    fontSize: "20pt",
    fontWeight: "bold",
    color: "blue"
  };

  render(){
    let data = this.props.data
    return (
      <div>
        <p style={this.title}>{this.props.title}</p>
        <ul>
          {data.map((item) =>
            <Item number={this.number++} value={item} key={this.number} /> )
          }
        </ul>
      </div>
    )
  }
}

//アイテムコンポーネントを新たに定義
class Item extends Component {
  //CSSを定義
  li = {
    listStyleType: "square",
    fontSize: "16pt",
    color: "#06",
    margin: "0px",
    padding: "red"
  }

  num = {
    fontWeight: "bold",
    color: "red"
  }

  render(){
    return (
      <li style={this.li}>
        <span style={this.num}>[{this.props.number}]</span>
          {this.props.value}
      </li>
    );
  }
}

//テーブルコンポーネントを定義
class Table extends Component {
  render(){
    return(
      <td style={this.props.tableStyle}>{this.props.value}</td>
    )
  }
}

export default App;
