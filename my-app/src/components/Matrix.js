import React, { Component } from 'react'
import Dot from './Dot'

export default class Matrix extends Component {
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
