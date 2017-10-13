import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ApiCall from './../util/ApiCalls';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorStatus: false,
      errorMessage: '',
      email: '',
      password: '',
      phone: '',
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value.email,
      password: event.target.value.password,
      name: event.target.value.name,
      phone: event.target.value.phone
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
     email: event.target.email.value,
     password: event.target.password.value,
     name: event.target.name.value,
     phone: event.target.phone.value,
    };
   ApiCall.RegisterUser(data).then((res) => {
      console.log(res);
      if (res.data.message === 'Registration Successfull and Logged In') {
        ApiCall.saveToken(res.data.user.token)
        this.props.history.push('/home');
      } else {
        this.setState({errorStatus: false});
      }
    });
  }

  render() {
    const errorMessage = this.state.errorStatus ? <div className="alert alert-border alert-danger">
    <strong>Oh snap!</strong> Change a few things up and try submitting again.</div> : '';
    return (
      <div className="container regContainer">
        <div className="row registerheader">
          <h2>Register</h2>
          {errorMessage}
          
        </div>
        <div className="row regCard card">
          <form onSubmit={this.handleSubmit}>

          <label htmlFor="name">Enter your Fullname</label>
          <input id="name"  type="text" value={this.state.name} onChange={this.handleChange} />

            <label htmlFor="email">Enter your email</label>
            <input id="email"  type="email" value={this.state.email} onChange={this.handleChange} />

            <label htmlFor="password">Enter your password</label>
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />

            <label htmlFor="phone">Enter your Phone Number</label>
            <input id="phone"  type="text" value={this.state.phone} onChange={this.handleChange} />

            <div className="row">
              <div className="pull-left col s6">
                <Link to="/login"> I Already Have an Account </Link>
              </div>
              <div className="col s6">
                <button className="pull-right waves-effect waves-light btn">Register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;