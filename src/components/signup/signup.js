import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './signup.css';

class UserSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      gender: '',
      address: '',
      jobrole: '',
      department: '',
      email: '',
      password: '',
      redirect: ''
    }

    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleJobroleChange = this.handleJobroleChange.bind(this);
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(event) {
    event.preventDefault();

    fetch('/api/v1/auth/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => { 
      alert(JSON.stringify(data))

      if (data.status === 'success') {
        this.setState({
          redirect: <Redirect to={{pathname: '/', state: {message: 'Your account was successfully created, login to continue'}}}/>
        })

        return this.state.redirect;
      }
    })
    .catch(error => alert(error))

  }

  handleFirstnameChange(event) {
    this.setState({
      firstname: event.target.value
    })
  }

  handleLastnameChange(event) {
    this.setState({
      lastname: event.target.value
    })
  }

  handleGenderChange(event) {
    this.setState({
      gender: event.target.value
    })
  }

  handleAddressChange(event) {
    this.setState({
      address: event.target.value
    })
  }

  handleJobroleChange(event) {
    this.setState({
      jobrole: event.target.value
    })
  }

  handleDepartmentChange(event) {
    this.setState({
      department: event.target.value
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
      <form className="UserSignup" onSubmit={this.handleFormSubmission}>
        {this.state.redirect}
        <h2>Create an account to connect with your team</h2>

        <div className="form-group form-row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="firstname"
              value={this.state.firstname}
              onChange={this.handleFirstnameChange}
              // required
            />
          </div>

          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="lastname"
              value={this.state.lastname}
              onChange={this.handleLastnameChange}
              // required
            />
          </div>
        </div>

        <div className="form-group form-row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="gender"
              value={this.state.gender}
              onChange={this.handleGenderChange}
              // required
            />
          </div>

          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="address"
              value={this.state.address}
              onChange={this.handleAddressChange}
              // required
            />
          </div>
        </div>

        <div className="form-group form-row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="jobrole (e.g employee)"
              value={this.state.jobrole}
              onChange={this.handleJobroleChange}
              // required
            />
          </div>

          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="department"
              value={this.state.department}
              onChange={this.handleDepartmentChange}
              // required
            />
          </div>
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            // required
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="choose a password you can remember"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            // required
          />
        </div>
        <p>
        Already have account? <Link to="/">signin to discover what's up</Link>
        </p>

        <button className="btn btn-secondary" type="submit">submit details</button>
      </form>
    )
  }
}

export default UserSignup;
