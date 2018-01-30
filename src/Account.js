import React, { Component } from 'react';

export default class Account extends Component {
  render() {
    return (
      // Use the property you set in App.js to add the name of the account to the <h2>
      <div className="account">
        <h2>TODO: CHANGE TO PROP</h2>
        <div className="balance">$0</div>
        <input type="text" placeholder="enter an amount" />
        <input type="button" value="Deposit" />
        <input type="button" value="Withdraw" />
      </div>
    )
  }
}
