import { ADD_NEW_USER, ADD_MESSAGE } from "../constants";

export const addNewUser = user => ({
  type: ADD_NEW_USER,
  payload: user
});

export function addMessage(date, author, text) {
  console.log("AC add message", date, author, text);
  return {
    type: ADD_MESSAGE,
    payload: {
      date: date,
      author: author,
      text: text
    }
  };
}
