import React, {Component} from 'react'
// import { persistStore } from 'redux-persist'
import { Provider } from 'react-redux'
import Store from './Store'
import App from '../containers/App'

export default class AppProvider extends Component{
  constructor(){
    super()
    this.state = {rehydrated:false}
  }
  // componentWillMount(){
  //   persistStore(Store, {}, ()=>{
  //     this.setState({rehydrated:true})
  //   })
  // }
  render(){
    return(
      <Provider store={Store}>
        <App/>
      </Provider>
    )
  }
}