import React, { Component } from 'react';
import Display from '../../presentational/Display';
import Buttons from '../../presentational/Buttons'
import './App.less';

export default class App extends Component {
  static _operatorCount = 1;

  constructor() {
    super();
    this.state = {
      prevNum: "",
      currentNum: "",
      currentOperation: null,
      Display: ""
    }
  }


 /*
  * 1. Grabbing the operator
  * 2. Moving currentNum to prevNum
  * 3. Set currentOperation to operator
  * 4. Check to see if this is the second or greater time
  *    that we're using an operator in this sequence
  *     a. If not, do nothing and continue
  *     b. otherwise, evaluate with current currentNum, prevNum and 
  *        currentOperation by calling the _handleEvaluate method like
  *        if the equal button was pressed
  * 5. Increment operator count
  */

  _handleOperators = ( event ) => {
    const valueOperator = event.target.value;
    this.setState({ 
      prevNum: this.state.currentNum,
      currentNum: "",
      currentOperation: valueOperator,
      Display:""
    }); 


    if ( App._operatorCount >  1 ) {
      this._handleEvaluate();
    }
    App._operatorCount++
  }

  /* This is the setup for all utility buttons: clear, percent and plus/minus. 
   * It is responsible for checking if valueUtility is equal to %, C or plusminus. 
   * 1. Set valueUtility to the event value of the button's that contain this method. 
   * 2. Check if valueUtility is equal to %, if it is then divide the currentNumber by 100. 
   * 3. If it is not equal to %, check if it is equal to "C", if it is, then set the state.
   * 4. If 
   */

   _handleUtility = (event) => {
    const valueUtility = event.target.value;

    //this._handleEvaluate(); 
    if (valueUtility === "%") {
      let percents = parseInt(this.state.currentNum); 
      const percentSign = percents / 100; 


      this.setState({
        currentNum: percentSign

      })
      //must fix the clear button

   } else if (valueUtility === "C") {
      this.setState({
        currentNum: "", 
      });

    } else if (valueUtility === "plusMinus" ) {
      console.log("You tried to use a negative sign or change to postive!");
    //soon add plus minus equation here. 
    }
  }
  



 _handleEqual = (event) => {
  this.setState({ 
    currentOperation: event.target.value
  });

  this._handleEvaluate(true)
  //resetting operator count when equal sign is pressed. 
  App._operatorCount = 1; 

 }

 /*
  * 1. Get currentNum, prevNum and currentOperation from state if it's avilable(non-empty string)
  *    a. if they're available, continue
  *    b. otherwise, we cant evaluate, so return(and maybe log an error)
  * 2. Check the operator, and execute the operation
  * 3. Set currentNum to new value
  * 4. Clear out previousNum and currentOperation
  */

  _handleEvaluate = (isEqual) => {

    let currentNumber = parseInt(this.state.currentNum);
    let previousNumber = parseInt(this.state.prevNum); 
    let x = currentNumber;
    let y = previousNumber;

    let value; 
    let newVal;

    if (this.state.currentOperation === "+") {
      value = x + y;
      newVal = String(value);
    } else if (this.state.currentOperation === "-") {
      value = y - x; 
      newVal = String(value);
    } else if (this.state.currentOperation === "x") {
      value = x * y; 
      newVal = String(value);
    } else if (this.state.currentOperation === "/") {
      value = y / x; 
      newVal = String(value);
    }

    
  
    if ( isEqual ) {
      this.setState({ 
        currentNum: newVal,
        currentOperation: "",
        Display: newVal
      });
    } else {
        this.setState({
        prevNum: newVal, //value
        currentNum: "",
        Display: newVal,
      });
    }

  }

  //Handles numbers that have more than one digit. 

  _handleNumbers = ( event ) => {
    const digit = event.target.value;
    this.setState({
      currentNum: this.state.currentNum + digit,
      Display: this.state.currentNum + digit
    });

  }

  render() {
    return (
      <div className="container">
        <Display Display={ this.state.Display }/> 
        <Buttons 
         handleOperators={ this._handleOperators } 
         handleNumbers={ this._handleNumbers } 
         handleClear={this._clearNumbers}
         handleEqual={this._handleEqual}
         handleUtility={this._handleUtility} />

      </div>
    );
  }
}