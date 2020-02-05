import React from 'react';
import UserLogin from '../../components/login/login';
import Nav from '../../components/nav/nav';
import './login.css';

function Login() {
  return(
    <div>
      <Nav/>
      <section className="container loginForm text-left">
        <UserLogin/>
      </section>
    </div>
  )
}

export default Login;
