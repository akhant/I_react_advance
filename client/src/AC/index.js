import { ADD_NEW_USER, ADD_MESSAGE } from "../constants";

export function addMessage(date, author, text) {
  return {
    type: ADD_MESSAGE,
    payload: {
      date: date,
      author: author,
      text: text
    }
  };
}

export const addNewUser = user => {
  return dispatch => {
    dispatch({
      type: ADD_NEW_USER,
      payload: user
    });
    dispatch(
      addMessage(Date.now(), user, `User ${user} connected to our super chat!`)
    );
  };
};


