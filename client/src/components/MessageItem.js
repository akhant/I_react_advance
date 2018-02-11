import React, { Component } from "react";

export class MessageItem extends Component {
  render() {
    const { message } = this.props;
    let date = new Date(message.time);
    return (
      <li className="clearfix">
        <div className="message-data align-right">
          <span className="message-data-time">{date.toLocaleString()}</span>{" "}
          &nbsp; &nbsp;
          <span className="message-data-name">{message.author}</span>{" "}
          <i className="fa fa-circle me" />
        </div>
        <div style={{ background: message.color }} className="message other-message float-right">{message.text}</div>
      </li>
    );
  }
}

export default MessageItem;
