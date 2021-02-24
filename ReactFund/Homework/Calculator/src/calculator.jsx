import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    // your code here

    this.state = { result: 0, num1: "", num2: ""};

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);

    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);

    this.clear = this.clear.bind(this);
  }

  // your code here

  setNum1(e) {

    e.preventDefault();
    // Get the input using the event passed in
    this.setState( {num1: e.currentTarget.value})

  }

  setNum2(e) {
    e.preventDefault();
    this.setState( {num2: e.currentTarget.value} )

  }

  add(e) {
    e.preventDefault();
    if (this.state.num1 === "" || this.state.num2 === "") {
      return
    } else {

      let sum = parseInt(this.state.num1) + parseInt(this.state.num2);
      this.setState( {result: sum} )

    }

  }
  
  sub(e) {
    e.preventDefault();
    if (this.state.num1 === "" || this.state.num2 === "") {
      return
    } else {

      let sum = parseInt(this.state.num1) - parseInt(this.state.num2);
      this.setState( {result: sum} )

    }

  }


  clear(e) {

    e.preventDefault();
    this.setState( {result: 0, num1: "", num2: ""} )

  }


  render() {

    const {result, num1, num2} = this.state;

    return (
      <div>
        <label>Num1</label>
        <input onChange={this.setNum1} value={num1}></input>
        <br />
        <label>Num2</label>
        <input onChange={this.setNum2} value={num2}></input>
        <br />
        <button onClick={this.add}>+</button>
        <br />
        <button onClick={this.sub}>-</button>
        <br />
        <button onClick={this.clear}>Clear</button>
        <h1>Result</h1>
        <h1>{result}</h1>
      </div>
    );
  }
}

export default Calculator;