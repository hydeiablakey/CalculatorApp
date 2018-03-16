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
  * 1. Grabs the operator being pressed by the user. 
  * 2. Sets the state and moves currentNum to prevNum.
  * 3. Sets the operator being grabbed to the currentOperation. 
  * 4. Display is being set to an empty string. 
  * 5. Check the static variable _operatorCount to see if this is the second or greater time that
  *    we are using an operator in this sequence. 
  *     a. If not, do nothing and continue
  *     b. Otherwise, execute handleEvaluate and the else statement within handleEvaluate that sets 
  *        prevNum and Display to newVal and currentNum to an empty string. 
  * 6. Increment operator count
  */

  _handleOperators = ( event ) => {
    const valueOperator = event.target.value;
    this.setState({ 
      prevNum: this.state.currentNum,
      currentNum: "",
      currentOperation: valueOperator,
      Display: ""
    }); 

    if ( App._operatorCount >  1 ) {
      this._handleEvaluate();
    }
      console.log("Current Number of Times a Operand was Pressed: ", App._operatorCount++);
  }

  /* This is the setup for all utility buttons: clear, percent and plus/minus. 
   * It is responsible for checking if valueUtility is equal to %, C or plusminus. 
   * 1. Set valueUtility to the event value of the button's that contain this method. 
   * 2. Check if valueUtility is equal to %, if it is then divide the currentNumber by 100.
   *    and set currentNum and displayNum to percentSign. If it is not equal to %, check if 
   *    it is equal to "C"
   * 3. If valueUtility is equal to "C", set the state to it's default values for each prop.
   *    If it is not equal to "C", check if it is equal to "plusMinus"
   * 4. If valueUtility not equal to % or C, check if it is equal to "plusMinus", if it is, 
   *    then multiply currentNum by -1 and set props Display and currentNum to the value of plusMinus. 
   */

   _handleUtility = (event) => {
    const valueUtility = event.target.value;
    if (valueUtility === "%") {
      let percents = parseInt(this.state.currentNum); 
      const percentSign = percents / 100; 
      console.log("The percent equivalent: " + percentSign);

      this.setState({
        currentNum: percentSign,
        Display: percentSign
      });

   } else if (valueUtility === "clear") {
      this.setState({
        prevNum: "",
        currentNum: "",
        currentOperation: null,
        Display: ""
      });

  } else if (valueUtility === "plusMinus" ) {
      let plusMinus = this.state.currentNum *= -1; 
      this.setState({
        Display: plusMinus, 
        currentNum: plusMinus
      });
    }
  }

  /*
   * 1. HandleEqual looks for when the equal sign is pressed and sets currentOperation to that value. 
   * 2. When HandleEqual is called, it calls the function handleEvaluate and passes the boolean 
   *    value of true to the handler.
   * 3. HandleEqual also sets the static variable operatorCount back to it's default value of 1.
   */

 _handleEqual = (event) => {
  this.setState({ 
    currentOperation: event.target.value
  });

  this._handleEvaluate(true);
  App._operatorCount = 1; 

 }

 /*
  * 1. Get currentNum, prevNum and currentOperation from state if it's avaliable(non-empty string)
  *    a. if they're available, continue
  *    b. otherwise, we cant evaluate, so return the currentNumber. 
  * 2. Set value(the result of the operation) to currentNumber. 
  * 3. Set value to newVal which converts value back into a String for handling more operations. 
  * 3. Clear out currentOperation and set currentNum and Display to the newVal. 
  * 4. If there are more operations with more than two numbers, change the state properties prevNum
  *    and Display to the newVal and set currentNum to an empty string because it is waiting for 
  *    another number to be entered. 
  */

  _handleEvaluate = ( isEqual ) => {
    //Changed to parseFloat so that when handling percents, it shows the value.  
    let currentNumber = parseFloat(this.state.currentNum);
    let previousNumber = parseFloat(this.state.prevNum); 
    let x = currentNumber;
    let y = previousNumber;

    let value = currentNumber;
    if (this.state.currentOperation === "+") {
      value = x + y;
    } else if (this.state.currentOperation === "-") {
      value = y - x; 
    } else if (this.state.currentOperation === "x") {
      value = x * y; 
    } else if (this.state.currentOperation === "/") {
      value = y / x; 
    }

    let newVal = String(value);

    console.log("Float Result: ", value);
    console.log("String Result: ", newVal);
    console.log("IsEqual Value: ",isEqual);

    //isEqual is true when we press the equals button. 
    if ( isEqual ) {
      this.setState({ 
        currentNum: newVal,
        currentOperation: "",
        Display: newVal
    });

    //isEqual is false when we are performing multiple operatons without pressing Equals right away. 
    // I.e - 2+2+2 
    } else {
        this.setState({
        prevNum: newVal, //value
        currentNum: "",
        Display: newVal,
      });
    }
  }


  // Handles numbers that have more than one digit. 
  /* 1. The variable digit checks for when a number is being pressed. 
   * 2. The state sets currentNum to the state of currentNum which is the value being entered and concates
   *    digit for values larger than 1 digit. 
   */

  _handleNumbers = ( event ) => {
    const digit = event.target.value;
    this.setState({
      currentNum: this.state.currentNum + digit,
      Display: this.state.currentNum + digit
    });
    console.log("handleNumbers", this.state );
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
         <div className='debug'>{ JSON.stringify( this.state, false, 2 ) }</div>
      </div>
    );
  }
}