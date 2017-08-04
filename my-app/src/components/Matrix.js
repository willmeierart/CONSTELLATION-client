import React, { Component } from 'react'
import Dot from './Dot'

let input = []

export default class Matrix extends Component {
  constructor(props){
    super(props)
    this.sendSocketsState = this.sendSocketsState.bind(this)
  }
  // findMultiDimArray(i){
  //   const RGBdata = {x:0,y:0}
  //   if (i<64){
  //     let base =i+100
  //     RGBdata.x=base%64
  //   } else {
  //     RGBdata.x= i %64
  //   }
  //   RGBdata.y = i-RGBdata.x/64
  // }

  componentWillMount(){
    input = this.props.dummyArray
    this.props.importSocketsUpdate(this.props.dummyArray)
  }

  sendSocketsState(i, update){
    this.props.updateState(i, update)
    if(this.props.realArray){
      input = this.props.realArray
    }
  }

  render() {

    const matrix = input.map((color, i)=>{
      const rgbcolor = {background:`rgb(${color[0]},${color[1]},${color[2]})`}
      return (
        <Dot key={i}
          initialColor={rgbcolor}
          activeColor={this.props.activeColor}
          sendSocketsState={()=>{this.sendSocketsState(i, this.props.activeColor)}}/>)
    })
    return(
      <div className="matrix-container">
          {matrix}
      </div>
    )
  }
}
