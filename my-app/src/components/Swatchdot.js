import React, { Component } from 'react'

export default class SwatchDot extends Component {
  constructor(props){
    super(props)
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e){  
    const selectedColor = e.target.style.backgroundColor
    this.props.setColor(selectedColor)
  }

  render() {
    const formattedColor = this.props.color.split(',').join(', ')
    const selectedDot = this.props.activeColor==formattedColor ? {selectedWidth: "26px", selectedHeight: "26px", deepShadow:"0px 0px 3px #2d2d2d"} : {selectedWidth: "20px", selectedHeight: "20px"}
    console.log(formattedColor);
    return (
      <div className="swatch-circle-container">
        <div
          style={{backgroundColor: this.props.color, width: selectedDot.selectedWidth, height: selectedDot.selectedHeight, boxShadow:selectedDot.deepShadow}}
          className="swatch-circle circle-shadow" onClick={this.clickHandler}>
        </div>
      </div>
    )
  }
}
