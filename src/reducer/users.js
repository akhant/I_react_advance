import {ADD_NEW_USER} from '../constants'

const initialState = ['aaa', 'bbb', 'ccc']

export default (state = initialState, action) => {
  const {user, payload} = action
  switch (action.type) {

  case ADD_NEW_USER:
        return state.concat(payload)

  default:
    return state
  }
}
