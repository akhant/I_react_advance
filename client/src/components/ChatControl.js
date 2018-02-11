import React, { Component } from "react";
import ws from "../util/ws";

export class ChatControl extends Component {
  state = {
    text: ""
  };

  handleTextarea = e => {
    this.setState({
      text: e.target.value
    });
    console.log(this.state.text);
  };

  handleSubmit = e => {
    e.preventDefault();
    ws.emit(this.state.text);
  };

  render() {
    return (
      <div className="chat-message clearfix">
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleTextarea}
            value={this.state.text}
            name="message-to-send"
            id="message-to-send"
            placeholder="Type your message"
            rows="4"
          />
          <i className="fa fa-file-o" /> &nbsp;&nbsp;&nbsp;
          <i className="fa fa-file-image-o" />
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default ChatControl;
