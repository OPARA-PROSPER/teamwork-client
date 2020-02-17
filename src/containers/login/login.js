import React from 'react';
import UserLogin from '../../components/login/login';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-solid-svg-icons';
import Nav from '../../components/nav/nav';
import './login.css';

function Login(props) {
  let display = () => {
    setTimeout(() => {
      return 'none'
    }, 100)
  }

  return(
    <div>
      <Nav/>
      <div>
        <p
          className="loginStatus"
          style={ props.location.state === undefined ? null :
            {
              border: '1px solid greenyellow',
              background: 'greenyellow',
              fontSize: '20px',
              borderRadius: '5px',
              width: '40%',
              margin: '2em auto 0',
              textAlign: 'center',
              padding: '1em',
              display: display()
            }
          }
        >
          {props.location.state !== undefined ? props.location.state.message : null}</p>
      </div>
      <section className="container loginForm text-left">
        <UserLogin/>
      </section>
    </div>
  )
}

export default Login;
