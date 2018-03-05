import React, { Component } from 'react';
import Input from '../../presentational/Input/Input';
import Buttons from '../../presentational/Buttons/Buttons'
import './App.less';

export default class App extends Component {
  static _operatorCount = 0;

  constructor() {
    super();

    this.state = {
      prevNum: "",
      currentNum: "",
      currentOperation: null
    }
  }


  //Responsible for changing the currentNum to the previousNum and after clicking a valueperator, currentNum returns to "". 

  _handleOperators = ( event ) => {
    const valueOperator = event.target.value;

    this.setState({ 
      prevNum: this.state.currentNum,
      currentNum: "",
      currentOperation: valueOperator
    });

    // handle the operation if this is the second or more
    // time that we've reached an operator in the same
    // sequence


    if ( App._operatorCount >  0) {
      this._evaluate(); //Then log the result of the first operation, to get another operation. 
    
    //currentNum is expecting a string because we don't parse until we hit the equal sign. 
    // But, we want to change the currentNumber into an int when a second operator is added or in other words
    // when count is > 0. 
      //console.log("State of currentNum: ", this.state.currentNum);

      //Trying to change value which is the result of prev num and current num into a string from a number. 
      //So that it will stop concatenating on the result and instead keep
      //console.log("Result in string form: ", value.toString() ); 
      // let z = parseInt(this.state.currentNum);
      // console.log("Parsed number when count >=1: ", z);

    }


    console.log("handleOperators",this.state, "\n operator count \n", _operatorCount);

    App._operatorCount++;
  }


  //responsible for converting string currentNum and previousNum and providing operations.
  _evaluate = () => {
    let currentNumber = this.state.currentNum;
    let previousNumber = this.state.prevNum; 
    let x = parseInt(currentNumber);
    let y = parseInt(previousNumber);
    console.log("Current Number: ", x);
    console.log("Previous Number:", y);

    let value; 

    if (this.state.currentOperation === "+") {
      value = x + y;
    } else if (this.state.currentOperation === "-") {
      value = x - y; 
    } else if (this.state.currentOperation === "x") {
      value = x * y; 
    } else if (this.state.currentOperation === "/") {
      value = x / y; 
    } else {
      console.log("Invalid Operation.");
    }

    console.log("Result: ", String(value));

    this.setState({
      prevNum: String(value),
      currentNum: String(value)
    });

    }

  //Handles numbers that have more than one digit. 

  _handleNumbers = ( event ) => {
    const digit = event.target.value;

    this.setState({
      currentNum: this.state.currentNum + digit 
    });

    console.log( "handleNumbers", this.state, "\n operator count \n", _operatorCount);
  }



  //Setup for button to clear the calculator display 
  _clearNumbers = () => {
    this.setState({
      currentNum: "", 
      prevNum: "",
      currentOperation: null
    })
  }


  render() {
    return (
      <div className="container">
        <Input currentNum={ this.state.currentNum } handleEqual={ this._handleEqualOperator } /> 
        <Buttons 
         handleOperators={ this._handleOperators } 
         handleNumbers={ this._handleNumbers } 
         handleClear={this._clearNumbers}
         evaluate={this._evaluate} />
      </div>
    );
  }
}