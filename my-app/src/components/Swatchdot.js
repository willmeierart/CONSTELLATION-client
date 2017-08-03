import React, { Component } from 'react';

class Swatchdot extends Component {
  constructor(props){
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
    this.state = {
      selected: false
    }
  }

clickHandler(e){
  this.setState({
    selected: this.state.selected ? false:true
  })
  console.log(e.target.style.backgroundColor)
}

  render() {
    const selectedDot = this.state.selected ? {selectedWidth: "26px", selectedHeight: "26px"} : {selectedWidth: "20px", selectedHeight: "20px"}
    return (
      <div style={{backgroundColor: this.props.color, width: selectedDot.selectedWidth, height: selectedDot.selectedHeight}} className="swatch-circle circle-shadow" onClick={this.clickHandler}>
      </div>
    );
  }
}

export default Swatchdot;
