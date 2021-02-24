import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // your code here

    this.state = { result: 0, num1: "", num2: ""};
    this.setNum1 = this.setNum1.bind(this);
  }

  // your code here

  setNum1(e) {

    e.preventDefault();
    alert("fired");

  }

  setNum2(e) {

  }

  render() {
    return (
      <div>
        <label>Num1</label>
        <input onChange={this.setNum1} value={this.state.num1}></input>
        <br />
        <label>Num2</label>
        <input></input>
        <h1>Result</h1>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Calculator;