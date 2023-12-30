// components/LoginPage.js

import React, { useEffect, useState } from 'react';
import '../Login/Login.css'; // Importing the CSS file for styling
import AOS from 'aos'
import 'aos/dist/aos.css'

const Login = () => {
    useEffect(()=>{
        AOS.init({duration: 1000, once:true})
    },[])
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the login logic
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleReset = () => {
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container" data-aos="zoom-in">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
