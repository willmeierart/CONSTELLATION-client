import React, { Component } from 'react'
import Header from '../components/Header'
import Matrix from '../components/Matrix'
import {SET_ACTIVE_COLOR} from '../actions'

class App extends Component {
  render() {
    return (
      <div className="App grey">
        <Header />
        <Matrix />
      </div>
    )
  }
}

const mapStateToProps=()=>{

}
const mapDispatchToProps=()=>{

}

export default App
