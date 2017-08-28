import React, { Component } from 'react'
import SwatchDot from './Swatchdot'
import _ from 'lodash'

export default class Palette extends Component {
  constructor(props){
    super(props)
    this.renderSwatches = this.renderSwatches.bind(this)
  }
  renderSwatches(){
    return _.map(this.props.palette, palette=>{
      return (
        <SwatchDot
          activeColor={this.props.activeColor}
          setColor={this.props.setColor}
          color={palette}
          key={palette}/>
      )
    })
  }

  render() {
    return (
      <div className="palette-container">
          {this.renderSwatches()}
      </div>
    )
  }
}
