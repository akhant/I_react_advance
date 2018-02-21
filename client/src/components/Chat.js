import React, { Component } from "react";
import { connect } from "react-redux";
import MessagesList from "containers/MessagesList";
import PeopleList from "containers/PeopleList";
import hocAuth from '../containers/hocAuth'

export class Chat extends Component {
  render() {
    return (
      <div className="container clearfix">
      <PeopleList />
        <MessagesList />
        
      </div>
    );
  }
}

export default connect()(hocAuth(Chat));
