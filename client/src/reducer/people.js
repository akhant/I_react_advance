import { CONNECTED_NEW_USER} from '../constants'



export default (state = [], action) => {
  
  switch (action.type) {

  case CONNECTED_NEW_USER:
        return state.concat({userName: action.userName,
        id: action.userId
      })

  default:
    return state
  }
}
