import React, { Component } from 'react';
import Swatchdot from './Swatchdot'

class Palette extends Component {
  render() {
    const dummyArray = () => {
      const array = [];
      const paletteColors = [
        "rgb(199,11,255)",
        "rgb(144,7,164)",
        "rgb(11,132,203)",
        "rgb(26,216,9)",
        "rgb(248,243,41)",
        "rgb(247,163,20)",
        "rgb(250,48,32)",
        "rgb(218,42,100)",
        "rgb(246,65,156)",
        "rgb(255,255,255)",
        "rgb(0,0,0)"
      ]
      for (let i=0; i < 11; i++){
        array.push(<Swatchdot color={paletteColors[i]} key={i}/>);
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
