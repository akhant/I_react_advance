import React, { Component } from "react";
import hocLoader from "./hocLoader";

export class HocChild extends Component {
  render() {
    const { currency } = this.props;
    return (
      <div>
        As of: {currency.date}
        <p>1 USD = {currency.rates["EUR"] } EUR</p>
        <p>1 USD = { currency.rates["RUB"]} RUB</p>
      </div>
    );
  }
}

export default hocLoader('currency')('http://i.imgur.com/QxsxVEc.gif')(HocChild);
