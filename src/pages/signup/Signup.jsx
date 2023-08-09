import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('traveller');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const signUpUser = async () => {
    try {
      const response = await axios.post('http://localhost:3000/users', {
        username,
        email,
        password,
        role: userType,
      });
      console.log('Signup Successful:', response.data);
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/userdashboard'); // Navigate to UserDashboard after successful signup
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '') {
      setError('Username is required.');
    } else if (email === '') {
      setError('Email is required.');
    } else if (password === '') {
      setError('Password is required.');
    } else {
      setError('');
      signUpUser();
    }
  };

  const handleToggle = () => {
    setError('');
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div>
      <br />
      <br />
      <div id="signup_form">
        <h1 className="h3 mb-3 font-weight-normal">{isLogin ? 'Login' : 'Sign Up'}</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Username"
            required
          />
          <br />
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
          {/* Add the user type selection drop-down */}
          <select name="userType" value={userType} onChange={handleUserTypeChange}>
            <option value="traveller">Traveller</option>
            <option value="tour-operator">Tour Operator</option>
          </select>
          <br />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <br />
          <input type="submit" value={isLogin ? 'Login' : 'Sign Up'} className="button1" />
        </form>
        <br />
        <p>
          {isLogin ? "Don't have an account? " : 'Already have an account? '}
          <Link to={isLogin ? '/signup' : '/login'} onClick={handleToggle}>
            {isLogin ? 'Sign Up' : 'Login'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
