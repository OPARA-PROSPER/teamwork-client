import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { signinValidator } from '../../utility/utility';
import './login.css';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: '',
      validatorMessage: null
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(event) {
    event.preventDefault();

    let validator = signinValidator(this.state);

    if (validator.status === 'error') return this.setState({validatorMessage: validator.message});

    fetch('/api/v1/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        this.setState({
          redirect: <Redirect to={{
                      pathname: `/dashboard/${data.data.userID}`,
                      state: {id: data.data.userID, token: data.data.token}}
                    }/>
        })
        return this.state.redirect
      }

      return this.setState({validatorMessage: data.error});
    })
    .catch(error => {
      console.log(JSON.stringify(error));
    })
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form className="userLogin" onSubmit={this.handleFormSubmission}>
        {this.state.redirect}
        <h2>Signin to begin bonding with your team</h2>

        <p style={this.state.validatorMessage !== null ? {color: 'white', padding: '.5em', border: '1px solid red', background: 'red'} : null }>{this.state.validatorMessage}</p>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="enter your email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="enter your secret key"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            required
          />
        </div>
        {/* <p>
        Don't have account? <Link to="/signup">signup to get started</Link>
        </p> */}

        <button className="btn btn-secondary" type="submit">Sign In</button>
      </form>
    )
  }
}

export default UserLogin;
