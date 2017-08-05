import React, { Component } from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import Header from '../components/Header'
import Matrix from '../components/Matrix'
import {setActiveColor, fetchPalette, exportSocketsUpdate} from '../actions'

class App extends Component {
  constructor(props){
    super(props)
    this.updateState = this.updateState.bind(this)
  }
  componentWillMount(){this.props.onFetchPalette()}

  updateState(i, updatedColor){
    const data = this.props.data.socketsData.matrixState
    const updatedArr = data.slice()
    updatedArr[i] = {backgroundColor: updatedColor.replace(/\s+/g,'')}
    this.props.onExportSocketsUpdate({index: i, data: updatedArr[i]})
  }

  render() {
    const socket = io('https://constellation.herokuapp.com/' || 'http://localhost:3000')
    socket.on('user'), data=>{
      let numUsers = 0
      numUsers=data.concurrentUsers
      console.log(numUsers);
    }
    console.log();
    const {colorData} = this.props.data
    return (
      <div className="App grey">
        <div>
          <Header
            palette={colorData.palette}
            setColor={this.props.onSetActiveColor}
            activeColor={colorData.activeColor}/>
          <Matrix
            dummyArray={this.props.data.socketsData.dummyArray}
            realArray={this.props.data.socketsData.matrixState}
            activeColor={colorData.activeColor}
            exportSocketsUpdate={this.props.onExportSocketsUpdate}
            updateState={this.updateState}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{ return {data:state} }

const mapDispatchToProps=(dispatch)=>{
  return{
    onSetActiveColor:(color)=>{dispatch(setActiveColor(color))},
    onFetchPalette:()=>{dispatch(fetchPalette())},
    onExportSocketsUpdate:(data)=>{dispatch(exportSocketsUpdate(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
