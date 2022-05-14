import React from 'react';

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>Customer Checkout</h2>
        <div>
          <input type="text" name="firstName" placeholder="First Name"></input>
          <input type="text" name="lastName" placeholder="Last Name"></input>
          <input type="text" name="email" placeholder="email address"></input>
          <input type="text" name="password" placeholder="password (max 32 characters)"></input>
        </div>
        <div></div>
        <div></div>
        <button>Next</button>
      </div>
    );
  }
}

export default Form1;