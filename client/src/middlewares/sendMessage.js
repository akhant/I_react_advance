
import {SEND_MESSAGE} from 'constants'
/* import ws from '../util/ws' */

const sendMessage = store => next => action => {
    console.log(action.text)
    if (action.type !== SEND_MESSAGE) return next(action)
    
    
    
    
    return next(action)
  };
  
  export default sendMessage;