import React, { Component} from 'react';

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

export default Member;
