import React from 'react';
import Form1 from './form1.jsx';
import Form2 from './form2.jsx';
import Form3 from './form3.jsx';
import SubmitButton from './submitButton.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      creditCard: '',
      expiry: '',
      cvv: '',
      billingZip: '',
      formCounter: 0,
    };
    // method binding
    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleSubmitForm1 = this.handleSubmitForm1.bind(this);
  }

  //methods
  handleChangeForm = function(e) {
    // console.log(e.target.value)
    // console.log('this', this);
    this.setState({[e.target.name]: e.target.value});
  };

  incrementer = function(val) {
    return val += 1;
  }

  handleSubmitForm1 = () => {
    // console.log('You need to send this as an HTTP req to server!');
    // console.log('this', this);
    // console.log(this.state);
    // verify form input first!

    // then can increment this.state.formCounte upon submission

    // this.setState({formCounter: this.state.formCounter + 1});
    // this.setState(({formCounter}) => ({formCounter: formCounter + 1}));
    // this.setState(({[this.state.formCounter]}) => {
    //   return {formCounter: } /* not even completed */
    // })

    this.setState(this.state.formCounter, () => (
      {formCounter: [formCounter] + 1}
    ));

    // this.setState({formCounter: [this.state.formCounter] + 1});
    // this.setState({formCounter: this.state.formCounter + 1 });
    // this.setState({formCounter}, function(prevState) {});
    // this.setState((state, props) => {return {formCounter: this.state.formCounter + props.incrementer};});
    // this.setState((prevState) => {
    //   return {formCounter: prevState.formCounter + 1};
    // });

    console.log(this.state);
  };

  render() {
    if (this.state.formCounter === 0) {
      return (
        <div>
          <Form1 handleChangeForm={this.handleChangeForm} handleSubmitForm1={this.handleSubmitForm1} />
          <SubmitButton handleSubmitForm1={this.handleSubmitForm1}/>
        </div>
      );
    }
    if (this.state.formCount === 1) {
      return (
        <div>
          <Form2 handleChangeForm={this.handleChangeForm} handleSubmitForm1={this.handleSubmitForm1} />
        </div>
      );
    }
    // if (this.state.formCount === 2) {
    //   return (
    //     <div>
    //       <Form3 handleChangeForm={this.handleChangeForm} handleSubmitForm1={this.handleSubmitForm1} />
    //     </div>
    //   );
    // }
  }
}

export default App;