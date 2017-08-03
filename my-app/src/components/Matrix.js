import React, { Component } from 'react'
import Dot from './Dot'

export default class Matrix extends Component {
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
  render() {
    const matrix = this.props.dummyArray.map((color, i)=>{
      const rgbcolor = {background:`rgb(${color[0]},${color[1]},${color[2]})`}
      return (
        <Dot key={i}
          initialColor={rgbcolor}
          activeColor={this.props.activeColor}/>)
    })
    return(
      <div className="matrix-container">
          {matrix}
      </div>
    )
  }
}
