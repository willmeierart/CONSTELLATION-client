import React, { Component } from 'react';

class Dot extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div style={this.props.colorStyle} className="circle circle-shadow">
      </div>
    );
  }
}

export default Dot;
