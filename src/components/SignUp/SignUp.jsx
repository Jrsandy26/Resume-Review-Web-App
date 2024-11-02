// src/components/SignUp/SignUp.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    if (users.some(user => user.email === email)) {
      alert('User already exists!');
      return;
    }

    // Add new user
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Navigate to a different page after successful sign up
    navigate('/redirect'); // Adjust the path as needed
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{' '}
          <button onClick={() => navigate('/')} className="login-btn">
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
