import React, { Component } from "react";
import PropTypes from "prop-types";
import faker from "faker";
import { connect } from "react-redux";
import {addMessage} from '../AC'


export class Messages extends Component {
  state = {
    text: ""
  };

  handleInput = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addMessage } = this.props;
    const date = Date.now();
    const rndUsername = faker.internet.userName();
    addMessage(date, rndUsername, this.state.text);
    
  };

  render() {
    const { messages } = this.props;

    return (
      <div className="chat__messages">
        <div className="chat__massages_text">
          {messages.map(message => {
            const date = new Date(message.date);
            return (
              <p key={message.date} className="message">
                <span className="message__date">
                  
                  {`${date.toLocaleString()}`}|
                </span>
                <span className="message__author">{message.author}| </span>
                <span className="message__text"> {message.text}</span>
              </p>
            );
          })}
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="chat__messages_input">
            <input
              onChange={this.handleInput}
              value={this.state.text}
              type="text"
              className="chatInput"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {addMessage})(Messages);
