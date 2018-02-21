import {  RECEIVE_NEW_MESSAGE } from "constants";

const initialState = [];

export default (state = initialState, action) => {
  const { data } = action;

  switch (action.type) {
   
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
