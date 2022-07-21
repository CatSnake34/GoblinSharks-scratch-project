import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../css/styles.css'

// https://github.com/Yeti-Crab34/FinanceTracker/blob/main/client/react/Login.jsx
const LoginSignup = props => {

//function to run when button is clicked

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  
  const loginBtn = async () => {
    try {
      const status = await axios.post('/user/login', 
        {email: email, password: password },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json', 
          },
        }, 
      );
      // After successful login:
      // console.log(status)
      // localStorage.setItem(
      //   'user', 
      //   JSON.stringify(...status.data));

      props.setUserID(document.cookie.slice(document.cookie.indexOf('=') + 1));
      if (status) props.setLoggedIn(true); // route to homepage
      else console.log('Error logging in');
    }
    catch(err) {
      console.log('Error logging in: ', err);
    }
  };

  const signUpBtn = async () => {
    try {
      if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email)) console.log('did not pass regex');
      const status = await axios.post('/user/signup',
      {fullname: fullName, email: email, password: password },
      {
        headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json', 
        },
      }
      );

      // After successful signup:
      if (status) props.setLoggedIn(true); //route to homepage
      else console.log('error signing up');
    }
    catch(err) {
      console.log('error in sign up attempt: ', err);
    }
    // After successful sign up:
  };

  return (
    <div className = "LoginSignup">
      <div className="login">
        <h2>Log In</h2>
        <div className="form-group">
          <input id="email" type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
          <input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <button id="login" type="submit" onClick={loginBtn}>Log in</button>
      </div>
      <div className="signup">
        <h2>Sign Up</h2>
        <div className="form-group">
          <input type="text" placeholder="Full Name" onChange={e => setFullName(e.target.value)}/>
          <input id="email" type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
          <input id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          <input type="text" placeholder="Confirm Password" />
        </div>
        <button id="signup" onClick={signUpBtn}>Sign up</button>
      </div>
    </div>
  )
}

export default LoginSignup;