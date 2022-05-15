import React from 'react';

var Form3 = (props) => (
    <div>
      <h3>Step 3</h3>
      <div>
        <label htmlFor="creditCard">Credit Card Number</label><br></br>
        <input type="search" name="creditCard" placeholder="Credit Card Number" onChange={props.handleChangeForm}></input><br></br>
        <label htmlFor="expiry">Expiry</label><br></br>
        <input type="search" name="expiry" placeholder="Expiry" onChange={props.handleChangeForm}></input><br></br>
        <label htmlFor="cvv">CVV</label><br></br>
        <input type="search" name="cvv" placeholder="CVV" onChange={props.handleChangeForm}></input><br></br>
        <label htmlFor="billingZip">Billing Zip Code</label><br></br>
        <input type="search" name="billingZip" placeholder="Billing Zip Code" onChange={props.handleChangeForm}></input>
      </div>
      {/* <div>
        <button onClick={props.handleSubmitForm1}>Next</button>
      </div> */}
    </div>
);

export default Form3;