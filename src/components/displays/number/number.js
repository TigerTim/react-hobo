
import React, { Component } from 'react';
import './number.css'
class Number extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='display' style={
        {
          'grid-column': this.props.startCol + ' / span 4',
          'grid-row': this.props.startRow + ' / span 3',
          'flex-flow': 'row',
        }}
      >
      <div>
        <div >{this.props.title}</div>
        <div><span>{this.props.value}</span>{this.props.unit}</div>
      </div>
    </div>
  
    );
  }
}

export default Number;




