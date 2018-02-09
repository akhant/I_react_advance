import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import Chat from "./Chat";
import "../assets/styles/styles.sass";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Chat />
        </div>
      </Provider>
    );
  }
}

export default App;
