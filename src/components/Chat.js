import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewUser } from "../AC";
import faker from "faker";
import Messages from './Messages'
import Users from './Users'

export class Chat extends Component {
  

  render() {
    const { users } = this.props;
    return (
      <div className="chatBox">
        <div className="chatBox__header">
          <h3>Chat</h3>
           <hr />
        </div>
        <div className="chat">
         <Messages />
         <Users users={users}/>
          
        </div>
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      users: state.users
    };
  },
  { addNewUser }
)(Chat);
