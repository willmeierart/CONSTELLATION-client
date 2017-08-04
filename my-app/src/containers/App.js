import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Matrix from '../components/Matrix'
import {setActiveColor, fetchPalette, importSocketsUpdate, exportSocketsUpdate} from '../actions'

class App extends Component {
  constructor(props){
    super(props)
    this.updateState = this.updateState.bind(this)
  }
  componentWillMount(){this.props.onFetchPalette()}

  updateState(i, update){
    const data = this.props.data.socketsData.matrixState
    console.log(data);
    const updatedArr = data.slice()
    updatedArr[i] = {backgroundColor: update.replace(/\s+/g,'')}
    // const updatedArr = Object.assign([], data, {i:update})
    console.log(updatedArr);
    this.props.onExportSocketsUpdate(updatedArr)
    console.log('hello',update);
  }

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
            dummyArray={this.props.data.socketsData.dummyArray}
            realArray={this.props.data.socketsData.matrixState}
            activeColor={colorData.activeColor}
            importSocketsUpdate={this.props.onImportSocketsUpdate}
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
    onImportSocketsUpdate:(data)=>{dispatch(importSocketsUpdate(data))},
    onExportSocketsUpdate:(data)=>{dispatch(exportSocketsUpdate(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
