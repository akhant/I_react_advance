import {combineReducers} from 'redux'
import messages from './messages'
import people from './people'

export default combineReducers({
    people,
    messages
})


    