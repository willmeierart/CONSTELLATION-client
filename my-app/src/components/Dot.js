import React, { Component } from 'react'

export default class Dot extends Component {
  constructor(props){
    super(props)
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor(e){
    this.props.sendSocketsState()
  }
  render() {
    return (
      <div
        onClick={(e)=>{this.changeColor(e)}}
        style={this.props.currentColor}
        className="circle circle-shadow">
        <div></div>
      </div>
    )
  }
}
