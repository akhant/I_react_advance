import React, { Component } from "react";
import ws from '../util/ws'


export default (ChildComponent) => {
  return class hocAuth extends Component {
    auth() {
      if (localStorage.getItem("auth")) return true;
      let name = prompt("Enter your name");
      if (!name || !name.trim().length) return false;


      localStorage.setItem("auth", name);
      ws.emit(name)
      return true;
    }

    noName() {
      return (
        <div className="noName" >
          <h2>You didn't enter name :(</h2>
          <br />
          <button onClick={() => location.reload()}>Try again?</button>
        </div>
      );
    }
    render() {
      return this.auth() ? <ChildComponent /> : this.noName();
    }
  };
};
