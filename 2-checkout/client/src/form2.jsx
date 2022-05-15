import React from 'react';

var Form2 = (props) => (
    <div>
      <h3>Step 2</h3>
      <div>
        <label htmlFor="address1">Address Line 1</label><br></br>
        <input type="search" name="address1" placeholder="Address line 1" onChange={props.handleChangeForm}></input><br></br>
        <label htmlFor="address2">Address Line 2</label><br></br>
        <input type="search" name="address2" placeholder="Address line 2" onChange={props.handleChangeForm}></input><br></br>
        <label htmlFor="city">City</label><br></br>
        <input type="search" name="city" placeholder="City" onChange={props.handleChangeForm}></input><br></br>
        <label htmlFor="state">State</label><br></br>
        <input type="search" name="state" placeholder="State" onChange={props.handleChangeForm}></input><br></br>
        <label htmlFor="zip">Zip Code</label><br></br>
        <input type="search" name="zip" placeholder="Zip Code" onChange={props.handleChangeForm}></input><br></br>
        <label htmlFor="phone">Phone Number</label><br></br>
        <input type="search" name="phone" placeholder="Phone Number" onChange={props.handleChangeForm}></input>
      </div>
      {/* <div>
        <button onClick={props.handleSubmitForm1}>Next</button>
      </div> */}
    </div>
);

export default Form2;