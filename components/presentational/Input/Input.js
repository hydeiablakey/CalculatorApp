import React, { Component } from 'react';
import './Input.less';

export default class Input extends Component {

  render() {
    return (
      <div className="calculatorDisplay" type="text" placeholder="0">{ this.props.currentNum }</div>
    );
  }
}