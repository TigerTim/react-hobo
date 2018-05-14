
import React, { Component } from 'react';
import './number.css'
import Number from './number.js'

class Temp extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Number 
        startCol={this.props.startCol}
        startRow={this.props.startRow}
        value={this.props.value}
        title='Temperature'
        unit='°C'
      />
  
    );
  }
}

export default Temp;




