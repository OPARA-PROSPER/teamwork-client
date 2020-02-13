import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

class UserSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmission = this.handleFormSubmission.bind(this);
  }

  handleFormSubmission(event) {
    event.preventDefault();
    
    alert(JSON.stringify(this.state));
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
        <h2>Signin to catch up with everyone </h2>

        <div className="form-group form-row">
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="firstname"
              // value={this.state.email}
              // onChange={this.handleEmailChange}
              // required
            />
          </div>

          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="lastname"
              // value={this.state.email}
              // onChange={this.handleEmailChange}
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
              // value={this.state.email}
              // onChange={this.handleEmailChange}
              // required
            />
          </div>

          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="address"
              // value={this.state.email}
              // onChange={this.handleEmailChange}
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
              // value={this.state.email}
              // onChange={this.handleEmailChange}
              // required
            />
          </div>

          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="department"
              // value={this.state.email}
              // onChange={this.handleEmailChange}
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
