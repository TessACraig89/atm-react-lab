import React, { Component } from 'react';
import logo from './ga.png';

import Account from './Account';

class App extends Component {
  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        {/* Pass a name property to each Account component, one for "Checking", the other for "Savings". These will be used and accessed as props for our component. */}
        <Account name="Checking"/>
        <Account name="Savings"/>
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
