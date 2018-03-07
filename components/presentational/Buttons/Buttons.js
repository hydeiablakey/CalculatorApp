import React, { Component } from 'react';
import './Buttons.less';

export default class Buttons extends Component {
  render() {
    let { handleOperators, handleNumbers, handleClear, handleEvaluate } = this.props;

    return(
      <div className="buttonContainer ">
        <button className="operatorBtn" onClick={ handleOperators } value="x">x</button>
        <button className="operatorBtn" onClick={ handleOperators } value="-" >-</button>
        <button className="operatorBtn" onClick={ handleOperators } value="+" >+</button>
        <button className="operatorBtn" onClick={ handleOperators } value="/">/</button>



        <button className="operatorBtn" onClick={ handleEvaluate } value="=">=</button>



        <button className="numberBtn" onClick={ handleNumbers } value="9">9</button>
        <button className="numberBtn" onClick={ handleNumbers } value="8">8</button>
        <button className="numberBtn" onClick={ handleNumbers } value="7">7</button>
        <button className="numberBtn" onClick={ handleNumbers } value="6">6</button>
        <button className="numberBtn" onClick={ handleNumbers } value="5">5</button>
        <button className="numberBtn" onClick={ handleNumbers } value="4">4</button>
        <button className="numberBtn" onClick={ handleNumbers } value="3">3</button>
        <button className="numberBtn" onClick={ handleNumbers } value="2">2</button>
        <button className="numberBtn" onClick={ handleNumbers } value="1">1</button>
        <button className="numberBtn" onClick={ handleNumbers } value="0">0</button>

        <button className="clearBtn" onClick={handleClear} value="clear">C</button>


      </div>
    );
  }

}