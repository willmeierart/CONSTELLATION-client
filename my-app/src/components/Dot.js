import React, { Component } from 'react'

export default class Dot extends Component {
  constructor(props){
    super(props)
    this.state = {currentColor: {backgroundColor:'rgb(255,255,255)'}}
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor(e){
    this.setState(
      {currentColor:{backgroundColor:`${this.props.activeColor}`}}
    )
  }
  render() {
    return (
      <div
        // onDragEnter={(e)=>{this.changeColor(e)}}
        onMouseOver={(e)=>{this.changeColor(e)}}

        onClick={(e)=>{this.changeColor(e)}}
        style={this.state.currentColor}
        className="circle circle-shadow">
        <div></div>
      </div>
    )
  }
}
