import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const loginUser = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });
      const token = response.data.token;

    // Store the token in localStorage
    localStorage.setItem('token', token);
      // console.log('Login Successful:', response.data);
      setEmail('');
      setPassword('');
      navigate('/userdashboard'); // Navigate to UserDashboard after successful login
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === '') {
      setError('Email is required.');
    } else if (password === '') {
      setError('Password is required.');
    } else {
      setError('');
      loginUser();
    }
  };

  return (
    <div>
      <br />
      <br />
      <div id="login_form">
        <h1 className="h3 mb-3 font-weight-normal">Login</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
          <br />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <br />
          <input type="submit" value="Login" className="button1" />
        </form>
        <br />
        <p>
          Don't have an account? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
