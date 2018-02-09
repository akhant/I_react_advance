import { ADD_NEW_USER, ADD_MESSAGE } from "../constants";

export const addNewUser = user => ({  
    type: ADD_NEW_USER,
    payload: user
  })

export const addMessage = message => ({
  type: ADD_MESSAGE,
  payload: message
});
