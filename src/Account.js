import React, { Component } from 'react';

export default class Account extends Component {
        // Add a balance property to state, and set to 0 initially
        constructor(props){
          super(props)
          this.state = {
            balance: 0
          }
        }
    }
  render() {
    return (
      // Use the property you set in App.js to add the name of the account to the <h2>
      <div className="account">
      {/* this.props.name is referring to the name property we assigned the App component in App.js */}
      <h2>{this.props.name}</h2>
      <div className="balance">$0</div>
      {/* Set a ref property on the text field, which is a callback function to save a reference to that text field in our Account object. This is the standard way we can access the data in the field later when we want to know what values to add/subtract from our account */}
      <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
      <input type="button" value="Deposit" />
      <input type="button" value="Withdrawl" />
    </div>
    )
  }
}
