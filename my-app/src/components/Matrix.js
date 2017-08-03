import React, { Component } from 'react'
import Dot from './Dot'
import dummyColorArray from '../reducers/dummy_array_generator'

export default class Matrix extends Component {


  render() {
    const matrix = dummyColorArray().map((color, i)=>{
      const rgbcolor = {background:`rgb(${color[0]},${color[1]},${color[2]})`}
      return (<Dot key={i} initialColor={rgbcolor}/>)
    })
    return(
    <div className="matrix-container">
        {matrix}
      </div>
    )
  }
}
