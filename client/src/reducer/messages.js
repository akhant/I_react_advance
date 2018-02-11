import { ADD_MESSAGE, RECEIVE_NEW_MESSAGE } from "constants";

const initialState = [];

export default (state = initialState, action) => {
  const { payload, data } = action;

  switch (action.type) {
    case ADD_MESSAGE:
      return state.concat(payload);

    case RECEIVE_NEW_MESSAGE:
      return state.concat({
        time: data.time,
        author: data.author,
        text: data.text,
        color: data.color
      });

    default:
      return state;
  }
};
