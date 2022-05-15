import React from 'react';

var Form1 = (props) => (
    <div>
      <h3>Step 1</h3>
      <div>
        <label htmlFor="firstName">First name</label><br></br>
        <input type="text" name="firstName" placeholder="First Name" onChange={props.handleChangeForm}></input><br></br>
        <label htmlFor="lastName">Last name</label><br></br>
        <input type="text" name="lastName" placeholder="Last Name" onChange={props.handleChangeForm}></input><br></br>
        <label htmlFor="email">Email address</label><br></br>
        <input type="email" name="email" placeholder="email address" onChange={props.handleChangeForm}></input><br></br>
        <label htmlFor="password">Password</label><br></br>
        <input type="password" name="password" placeholder="password" onChange={props.handleChangeForm}></input>
      </div>
      {/* <div>
        <button onClick={props.handleSubmitForm1}>Next</button>
      </div> */}
    </div>
);

export default Form1;