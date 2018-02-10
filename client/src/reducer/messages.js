import { ADD_MESSAGE } from "constants";

const initialState = [
 
];

export default (state = initialState, action) => {
  const { payload} = action
  switch (action.type) {

    case ADD_MESSAGE:
        return state.concat(payload)

    default:
        return state;
  }
};
