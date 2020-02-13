import React from 'react';
import UserSignup from '../../components/signup/signup';
import Nav from '../../components/nav/nav';

function Signup() {
  return(
    <div>
      <Nav/>
      <section className="container loginForm text-left">
        <UserSignup/>
      </section>
    </div>
  )
}

export default Signup;
