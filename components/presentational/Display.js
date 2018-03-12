import React, { Component } from 'react';

export default class Display extends Component {

  render() {
    return (
      <div className="display" type="text" placeholder="0">{ this.props.currentNum }</div>
    );
  }
}