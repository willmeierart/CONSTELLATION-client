import React, { Component } from 'react';

class Swatchdot extends Component {
  constructor(props){
    super(props)

    this.clickHandler = this.clickHandler.bind(this)
  }

clickHandler(e){
  console.log(e.target.style.backgroundColor)
}

  render() {
    return (
      <div style={{backgroundColor: this.props.color}} className="swatch-circle circle-shadow" onClick={this.clickHandler}>
      </div>
    );
  }
}

export default Swatchdot;
