import React from 'react';
import axios from 'axios';
import {
   Route, Redirect, Switch
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import ApiCall from './../util/ApiCalls';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorStatus: false,
      errorMessage: '',
      email: '',
      password: '',
      isAuthenticated: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value.email,
      password: event.target.value.password
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
     email: event.target.email.value,
     password: event.target.password.value,
    };
   ApiCall.LoginUser(data).then((res) => {
      if (res.data.message === 'Login Successful') {
        ApiCall.saveToken(res.data.auth_token);
        this.setState({isAuthenticated: true});
        localStorage.setItem('current_user_id', res.data.id)
        this.props.history.push('/');
      } else {
        alert(res.data.message)
        this.setState({errorStatus: false});
      }
    })
    .catch(error => {
      if (error.data) {
        alert(error.data.message.user_authentication) 
      }
    });
  }

  render() {
    const errorMessage = this.state.errorStatus ? <div className="alert alert-border alert-danger">
    <strong>Oh snap!</strong> Change a few things up and try submitting again.</div> : '';
    return (
      <div className="container regContainer">
        <div className="row registerheader">
          <h2>Login</h2>
          {errorMessage}
          
        </div>
        <div className="row regCard card">
          <form onSubmit={this.handleSubmit}>

            <label htmlFor="email">Enter your email</label>
            <input id="email"  type="email" value={this.state.email} onChange={this.handleChange} />

            <label htmlFor="birthdate">Enter your password</label>
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />

            <div className="row">
              <div className="pull-left col s6">
                <Link to="/register"> I don't have an Account </Link>
              </div>
              <div className="col s6">
                <button className="pull-right waves-effect waves-light btn loginBtn">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;