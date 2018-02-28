import React, { Component } from 'react';
import Input from '../../presentational/Input/Input';
import Buttons from '../../presentational/Buttons/Buttons'

import './App.less';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      prevNum: "",
      currentNum: "",
      currentOperation: null,
    }
  }

  _handleOperators = ( event ) => {
    const valueOperator = event.target.value;
    this.setState({ currentOperation: valueOperator });
  }

  _handleNumbers = ( event ) => {
    const digit = parseInt( event.target.value );

    if( this.state.currentOperation === null ) {
      //if we aren't adding an operation to currentNumber then we should add digits to the currentnumber. 
        this.setState({
        currentNum: this.state.currentNum + digit
        });

      //If we are adding an operation, then set that currentNum to be prevNum and 
      if ( this.state.currentOperation ) {

        this.setState({ 
        prevNum: this.state.currentNum
        
        })

        // console.log(this.state);
      }
    }

    console.log( this.state );
  }

  render() {
    return (
      <div className="container">
        <Input currentNum={ this.state.currentNum } /> 
        <Buttons handleOperators={ this._handleOperators } handleNumbers={ this._handleNumbers } />
      </div>
    );
  }
}