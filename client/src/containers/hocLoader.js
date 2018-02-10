import React, { Component } from "react";

export default propName => loaderPath => ChildComponent => {
  return class hocLoader extends Component {
    propIsEmpty() {
      const prop = this.props[propName];

      if (
        !prop ||
        (prop.hasOwnProperty("length") && !prop.length) ||
        !Object.keys(prop).length
      )
        return true;

      return false;
    }

    loaderComponent() {
      return <div><img src={loaderPath} alt="LOADING..."/></div>;
    }

    render() {
      return this.propIsEmpty() ? (
        this.loaderComponent()
      ) : (
        <ChildComponent {...this.props} />
      );
    }
  };
};


