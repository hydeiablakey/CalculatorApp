import React, { Component } from 'react';

export default class Buttons extends Component {
  render() {
    let { handleOperators, handleNumbers, handleEqual, handleUtility } = this.props;

    return(

    <div className="buttonsContainer">

        <button className="button utilityBtn clearBtn" onClick={handleUtility} value="clear">C</button>
        <button className ="button utilityBtn" onClick= {handleUtility} value="plusMinus">&#177;</button>
        <button className ="button utilityBtn" onClick={handleUtility} value="%">%</button>

        <button id="multiply" className="button operatorBtn" onClick={ handleOperators } value="x">x</button>
        <button id="subtract" className="button operatorBtn" onClick={ handleOperators } value="-" >-</button>
        <button id="plus" className="button operatorBtn" onClick={ handleOperators } value="+" >+</button>
        <button id="divide" className="button operatorBtn" onClick={ handleOperators } value="/">/</button>

        <button id="equal" className="button operatorBtn" onClick={ handleEqual } value="=">=</button>

        <button className="button numberBtn" onClick={ handleNumbers } value="9">9</button>
        <button className="button numberBtn" onClick={ handleNumbers } value="8">8</button>
        <button className="button numberBtn" onClick={ handleNumbers } value="7">7</button>
        <button className="button numberBtn" onClick={ handleNumbers } value="6">6</button>
        <button className="button numberBtn" onClick={ handleNumbers } value="5">5</button>
        <button className="button numberBtn" onClick={ handleNumbers } value="4">4</button>
        <button className="button numberBtn" onClick={ handleNumbers } value="3">3</button>
        <button className="button numberBtn" onClick={ handleNumbers } value="2">2</button>
        <button className="button numberBtn" onClick={ handleNumbers } value="1">1</button>
        <button className="button numberBtn double" onClick={ handleNumbers } value="0">0</button>
        <button className="button numberBtn" onClick={ handleNumbers } value=".">.</button>

    </div>
    );
  }

}