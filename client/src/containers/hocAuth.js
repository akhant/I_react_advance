import React, { Component } from "react";

export default (ChildComponent) => {
  return class hocAuth extends Component {
    auth() {
      if (localStorage.getItem("auth")) return true;
      let name = prompt("Enter your name");
      if (!name || !name.trim().length) return false;

      localStorage.setItem("auth", name);
      return true;
    }

    noName() {
      return (
        <div>
          You didn't enter name :(
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
