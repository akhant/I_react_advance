import { CONNECTED_NEW_USER, DISCONNECTED_USER} from 'constants'



export default (state = [], action) => {
  
  switch (action.type) {

  case CONNECTED_NEW_USER:
        return state.concat({userName: action.userName,
        id: action.userId
      })

      case DISCONNECTED_USER:
        return state.filter(user => {
          return user.id !== action.userId
        })
  

  default:
    return state
  }
}
