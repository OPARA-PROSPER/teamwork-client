import React, { Component } from 'react';
import './login.css';

class UserLogin extends Component {
  render() {
    return(
      <form className="userLogin">
        <h2>Signin to begin bonding with your team</h2>

        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="enter your email"
            // required
          />
        </div>

        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="enter your secret key"
            // required
          />
        </div>

        <button className="btn" type="submit">Sign In</button>
      </form>
    )
  }
}

export default UserLogin;
