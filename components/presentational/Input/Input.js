import React, { Component } from 'react';
import './Input.less';

export default class Input extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <input className="inputContainer " value="0" type="text" /> 
          <div className="buttonContainer">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <br/>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <br />
          </div>
        </div>
      </div>
    );
  }
}