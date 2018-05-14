import React, { Component } from 'react';
import './App.css';
import Button from './components/button.js'
import { Pressure, Temp } from './components/displays/number'


class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = { pressureValue: 0, tempValue: 0}
  }

  componentDidMount() {
    setInterval( () => {
      this.setState(
        {
          pressureValue: 950 + Math.floor((Math.random() * 100) + 1),
          tempValue: 5 + Math.floor((Math.random() * 20) + 1)
        }
      )
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <Button />
        <Pressure startCol={4} startRow={2} value={this.state.pressureValue}/>
        <Temp startCol={4} startRow={6} value={this.state.tempValue}/>
      </div>
    );
  }
}

export default App;
