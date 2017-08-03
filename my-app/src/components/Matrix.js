import React, { Component } from 'react';
import Dot from './Dot'

class Matrix extends Component {
  render() {
    const dummyArray = () => {
      const array = [];
      for (let i=0; i < 2048; i++){
        array.push(<Dot />);
      }
      return array
    }

    return (
      <div className="matrix-container">
          {dummyArray()}
      </div>
    );
  }
}

export default Matrix;
