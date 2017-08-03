import { compose, createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import logger from 'redux-logger'
import {autoRehydrate} from 'redux-persist'
import reducers from '../reducers'

const Store = compose(
  applyMiddleware(promise, logger),
  autoRehydrate()
)(createStore)(reducers)

export default Store
