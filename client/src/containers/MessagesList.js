import React, { Component } from "react";
import { connect } from "react-redux";
import ChatHeader from "components/ChatHeader";
import MessageItem from "components/MessageItem";
import ChatControl from "components/ChatControl";

export class MessagesList extends Component {
  state = {
    text: ""
  };

  render() {
    const { messages } = this.props;

    return (
      <div className="chat">
        <ChatHeader />

        <div className="chat-history">
          <ul>
            {messages.map(message => {
              return <MessageItem key={message.time} message={message} />;
            })}
          </ul>
        </div>
        <ChatControl />
      </div>
    );
  }
}

export default connect(state => {
  return {
    messages: state.messages
  };
})(MessagesList);
