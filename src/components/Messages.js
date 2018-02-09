import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Messages extends Component {
  static propTypes = {

  }

  render() {
    return (
        <div className="chat__messages">
        <div className="chat__massages_text">messages</div>
        <div className="chat__messages_input">
          <input type="text" className="chatInput" />
        </div>
      </div>
    )
  }
}

export default Messages
