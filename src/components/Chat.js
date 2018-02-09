import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewUser } from "../AC";
import faker from "faker";
import Messages from './Messages'
import Users from './Users'



export class Chat extends Component {
  

  render() {
    
    return (
      <div className="chatBox">
        <div className="chatBox__header">
          <h3>Chat</h3>
           <hr />
        </div>
        <div className="chat">
         <Messages messages={this.props.messages} />
         <Users users={this.props.users}/>
          
        </div>
      </div>
    );
  }
}


export default connect(
  state => {
    return {
      users: state.users,
      messages: state.messages
    };
  }
)(Chat);
