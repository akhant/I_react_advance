import { createStore,applyMiddleware } from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'
import logger from '../middlewares/logger'

 const store = createStore(reducer,applyMiddleware(thunk, logger));

window.store = store


export default store