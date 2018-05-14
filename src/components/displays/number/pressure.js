
import React, { Component } from 'react';
import './number.css'
import Number from './number.js'

class Pressure extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Number 
        startCol={this.props.startCol}
        startRow={this.props.startRow}
        value={this.props.value}
        title='Luftdruck'
        unit='hPa'
      />
  
    );
  }
}

export default Pressure;




