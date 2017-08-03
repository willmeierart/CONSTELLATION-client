import React, { Component } from 'react';
import Header from './Header';
import Matrix from './Matrix';

class App extends Component {
  render() {
    return (
      <div className="App grey">
        <Header />
        <Matrix />
      </div>
    );
  }
}

export default App;
