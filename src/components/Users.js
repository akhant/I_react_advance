import React, { Component } from 'react'
import faker from "faker";
import { addNewUser } from "../AC";
import { connect } from "react-redux";

export class Users extends Component {

    handleUser = () => {
        const rndUsername = faker.internet.userName();
        const { addNewUser } = this.props;
        addNewUser(rndUsername);
      };
  render() {
    const { users } = this.props;
    return (
        <div className="chat__users">
        <h3 className="chat__users_title">Online: </h3>
        <div className="chat__users_list">
          <ul>
            {users.map(user => {
              return <li key={user}>{user}</li>;
            })}
          </ul>
        </div>
        <button className="chat__users_btn" onClick={this.handleUser}>add new user</button>
      </div>
    )
  }
}

export default connect(null,
    { addNewUser }
  )(Users)
