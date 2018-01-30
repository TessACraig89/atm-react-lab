import React, { Component } from 'react';

export default class Account extends Component {
    //     constructor(props){
    //       super(props)
    //       this.state = {
    //         balance: 0
    //       }
    //     }
    // }
  render() {
    return (
      // Use the property you set in App.js to add the name of the account to the <h2>
      <div className="account">
      {/* this.props.name is referring to the name property we assigned the App component in App.js */}
      <h2>{this.props.name}</h2>
      <div className="balance">$0</div>
      <input type="text" placeholder="enter an amount" />
      <input type="button" value="Deposit" />
      <input type="button" value="Withdrawl" />
    </div>
    )
  }
}
