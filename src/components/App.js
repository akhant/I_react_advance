import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import Chat from "./Chat";
import "../assets/styles/styles.scss";

class App extends Component {
  render() {
    return (
      <Provider key={module.hot ? Date.now() : store} store={store}>
        <Chat />
      </Provider>
    );
  }
}

export default App;

