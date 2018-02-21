import { CONNECTED_NEW_USER, DISCONNECTED_USER,RECEIVE_NEW_MESSAGE } from "constants";
import { connectedNewUser, disconnectedUser, receiveNewMessage } from "AC";
import store from "store";

export default (wsUrl => {
  let ws;
  const { dispatch } = store;
  ws = new WebSocket(wsUrl);

  ws.onopen = () => {
    console.log("WS OPEN!");
  };

  ws.onmessage = message => {
    const messageObj = JSON.parse(message.data);
    const { userName, userId, data } = messageObj;
    console.log("ws message: ", messageObj);
    switch (messageObj.type) {
      case CONNECTED_NEW_USER:
        dispatch(connectedNewUser(userName, userId));
        break;
        case DISCONNECTED_USER:
        dispatch(disconnectedUser(userName, userId));
        break;
        case RECEIVE_NEW_MESSAGE:
        dispatch(receiveNewMessage(data, userId));
        break;
    }
  };

  let countReconnect = 0;

  if (countReconnect > 5) return;

  const emit = message => {
    if (ws.readyState === ws.CONNECTING) {
      setTimeout(() => {
        emit(message);
        countReconnect++;
      }, 500);
      return;
    }
    ws.send(message);
    countReconnect = 0;
  };

  return { emit };
})("ws://localhost:3000");
