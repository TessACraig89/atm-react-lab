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
    // Define a click handler method within the Account class
    handleDepositClick(e) {
       // It is good practice to still prevent default behavior
       e.preventDefault();
       // set a local variable to the amount entered in the text box.
       let amount = parseInt(this.inputBox.value);
       // set a local variable to the new balance based off of the original balance + amount
       let newBalance = this.state.balance + amount;
       // set the balance to the newBalance using the setState method (necessary)
       this.setState({
         balance: newBalance
       })
       // empty out the text box in this component
       this.inputBox.value = '';
     }
     // When the Withdraw button is clicked, you should deduct the amount entered in the text field to the balance. You should not be able to withdraw more than the current balance
     // Define a click handler method within the Account class
     handleWithdrawClick(e) {
        // It is good practice to still prevent default behavior
        e.preventDefault();
        // set a local variable to the amount entered in the text box.
        let amount = parseInt(this.inputBox.value);
        // set a local variable to the new balance based off of the original balance + amount
        let newBalance = this.state.balance + amount;
        // set the balance to the newBalance using the setState method (necessary)
        this.setState({
          balance: newBalance
        })
        // empty out the text box in this component
        this.inputBox.value = '';
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
      {/* Add a click handler in your input tags in our JSX return block */}
      <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)} />
      <input type="button" value="Withdraw" onClick={(e) => this.handleWithdrawClick(e)} />
    </div>
    )
  }
}
