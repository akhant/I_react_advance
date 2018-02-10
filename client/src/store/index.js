import { createStore,applyMiddleware } from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'
import logger from '../middlewares/logger'

/* eslint-disable no-underscore-dangle */
  const store = createStore(
   reducer,
   applyMiddleware(thunk, logger), /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
/* eslint-enable */





export default store