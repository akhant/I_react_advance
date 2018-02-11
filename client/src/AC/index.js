import {
  CONNECTED_NEW_USER,
  DISCONNECTED_USER,
  RECEIVE_NEW_MESSAGE
} from "constants";

export const connectedNewUser = (userName, userId) => ({
  type: CONNECTED_NEW_USER,
  userName,
  userId
});

export const disconnectedUser = (userName, userId) => ({
  type: DISCONNECTED_USER,
  userName,
  userId
});

export const receiveNewMessage = data => ({
  type: RECEIVE_NEW_MESSAGE,
  data
});
