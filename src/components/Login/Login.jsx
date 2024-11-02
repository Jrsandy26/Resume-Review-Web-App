// src/components/Login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      console.log('Logging in:', { email, password });
      navigate('/best5'); // Adjust the path as needed
    } else {
      alert('Invalid email or password!');
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google Login Success:', response);
    navigate('/best5'); // Adjust to the desired route after Google login
  };

  const handleGoogleFailure = (error) => {
    console.error('Google Login Failed:', error);
    alert('Google login failed, please try again!');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="google-login">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleFailure} />
        </div>
        <p>
          Don't have an account?{' '}
          <button onClick={() => navigate('/signup')} className="signup-btn">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
