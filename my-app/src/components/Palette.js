import React, { Component } from 'react';
import Dot from './Dot'

class Palette extends Component {
  render() {
    const dummyArray = () => {
      const array = [];
      for (let i=0; i < 10; i++){
        array.push(<Dot />);
      }
      return array
    }

    return (
      <div className="palette-container">
          {dummyArray()}
      </div>
    );
  }
}

export default Palette;
