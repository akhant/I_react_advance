import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "components/UserItem";
import PeopleSearch from "components/PeopleSearch";

export class PeopleList extends Component {
  render() {
    const { people } = this.props;
    return (
      <div className="people-list" id="people-list">
        <PeopleSearch />
        <ul className="list">
          {people.map(user => {
            return <UserItem key={user.id} user={user} />;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(state => {
  return { people: state.people };
})(PeopleList);
