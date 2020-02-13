import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './login.css';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(event) {
    // alert(JSON.stringify(this.state));
    event.preventDefault();

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
        // this.state.redirect = <Redirect to="/dashboard"/>
        console.log(data);
        this.setState({
          redirect: <Redirect to={{
                      pathname: `/dashboard/${data.data.userID}`,
                      state: {id: data.data.userID, token: data.data.token}}
                    }/>
        })
        return this.state.redirect
      }

      return alert(data.error);
    })
    .catch(error => {
      console.log(error);
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
    return(
      <form className="userLogin" onSubmit={this.handleFormSubmission}>
        {this.state.redirect}
        <h2>Signin to begin bonding with your team</h2>

        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="enter your email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            // required
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="enter your secret key"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            // required
          />
        </div>
        <p>
        Don't have account? <Link to="/signup">signup to get started</Link>
        </p>

        <button className="btn btn-secondary" type="submit">Sign In</button>
      </form>
    )
  }
}

export default UserLogin;
