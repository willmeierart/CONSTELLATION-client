import React, { Component } from 'react';

class Dot extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentColor: this.props.initialColor
    }
    this.changeColor = this.changeColor.bind(this)
  }
  changeColor(e){
    console.log(e.target)
    const newRandomColor=()=>{
      const dot = []
      for (let i = 0; i < 3; i++){
        const colVal = Math.random()*255
        dot.push(colVal.toFixed(0))
      }
      const rgbColor = {backgroundColor:`rgb(${dot[0]},${dot[1]},${dot[2]})`}
      return rgbColor
    }
    this.setState({currentColor:newRandomColor()})
  }
  render() {
    return (
      <div onDragEnter={(e)=>{this.changeColor(e)}} style={this.state.currentColor} className="circle circle-shadow"></div>
    );
  }
}

export default Dot;
