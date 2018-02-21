import React, { Component } from "react";
import { connect } from "react-redux";
import ChatHeader from "components/ChatHeader";
import MessageItem from "components/MessageItem";
import ChatControl from "components/ChatControl";

export class MessagesList extends Component {
  constructor(props) {
    super(props)
  
    this.ul = ''
    this.chatWrap = ''
  }
  
  
  componentDidUpdate = () => {
    this.chatWrap.scrollTop = this.ul.scrollHeight
  }
  

  render() {
    const { messages } = this.props;

    return (
      <div className="chat">
        <ChatHeader />

        <div className="chat-history" ref={chatWrap => this.chatWrap = chatWrap} >
          <ul ref={ul => this.ul = ul} >
            {messages.map(message => {
              return <MessageItem key={message.time} message={message} />;
            })}
          </ul>
        </div>
        <ChatControl messages={messages}/>
      </div>
    );
  }
}

export default connect(state => {
  return {
    messages: state.messages
  };
})(MessagesList);
