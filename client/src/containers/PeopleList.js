import React, { Component } from "react";
/* import { addNewUser } from "../AC"; */
import { connect } from "react-redux";

export class PeopleList extends Component {
  render() {
    const {people} = this.props
    return (
      <div className="people-list" id="people-list">
        <div className="search">
          <input type="text" placeholder="search" />
          <i className="fa fa-search" />
        </div>
        <ul className="list">
          {people.map(user => {
            return (
              <li className="clearfix" key={user} >
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
                  alt="avatar"
                />
                <div className="about">
                  <div className="name">{user}</div>
                  <div className="status">
                    <i className="fa fa-circle online" /> online
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(state => {
  return {people: state.people}
})(PeopleList);
