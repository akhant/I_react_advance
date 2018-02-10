import { ADD_NEW_USER, ADD_MESSAGE, CONNECTED_NEW_USER } from "../constants";

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

export const connectedNewUser = (userName, userId) => ({
  type: CONNECTED_NEW_USER,
  userName,
  userId
})

