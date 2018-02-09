import { createStore,applyMiddleware } from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'

 const store = createStore(reducer,applyMiddleware(thunk));

window.store = store


export default store