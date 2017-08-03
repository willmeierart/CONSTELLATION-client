import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Matrix from '../components/Matrix'
import {setActiveColor, fetchPalette} from '../actions'

class App extends Component {
  componentWillMount(){this.props.onFetchPalette()}

  render() {
    const {colorData} = this.props.data
    return (
      <div className="App grey">
        <div>
          <Header
            palette={colorData.palette}
            setColor={this.props.onSetActiveColor}
            activeColor={colorData.activeColor}/>
          <Matrix
            dummyArray={this.props.data.socketsData}
            activeColor={colorData.activeColor} />
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{ return {data:state} }

const mapDispatchToProps=(dispatch)=>{
  return{
    onSetActiveColor:(color)=>{dispatch(setActiveColor(color))},
    onFetchPalette:()=>{dispatch(fetchPalette())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
