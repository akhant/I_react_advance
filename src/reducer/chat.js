import { ADD_NEW_USER, ADD_MESSAGE } from "../constants";

const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {

  case ADD_MESSAGE:
    return { ...state }

  default:
    return state
  }
}
