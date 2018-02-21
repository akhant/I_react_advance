import { createStore,applyMiddleware } from 'redux'
import reducer from 'reducer'
import thunk from 'redux-thunk'
import logger from '../middlewares/logger'
import sendMessage from '../middlewares/sendMessage'


  const store = createStore(
   reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(thunk, logger, sendMessage  )
  );






export default store