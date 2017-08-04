import { compose, createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import logger from 'redux-logger'
//import {autoRehydrate} from 'redux-persist'
import reducers from '../reducers'
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

const Store = compose(
  applyMiddleware(promise, logger, socketIoMiddleware),
  // autoRehydrate()
)(createStore)(reducers)

export default Store
