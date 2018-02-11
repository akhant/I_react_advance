import React, { Component } from "react";
import { connect } from 'react-redux'
import {sendMessage} from 'AC'
import ws from 'util/ws'

export class ChatControl extends Component {
  state = {
    text: ''
  };

  handleTextarea = e => {
    
    this.setState({
      text: e.target.value
    });
    
  };

  handleSubmit = e => {
    e.preventDefault();
    const {sendMessage} = this.props
    sendMessage(this.state.text);
    ws.emit(this.state.text)
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

export default connect(null, {sendMessage})(ChatControl);
