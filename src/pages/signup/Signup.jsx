import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [isLogin, setIsLogin] = useState(false); // State to track if it's a login or signup page
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('traveler'); // State to track user type selection
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any signup logic here (e.g., calling an API to register the user)
    // For this example, we will simulate an error for demonstration purposes
    if (username === '') {
      setError('Username is required.');
    } else if (email === '') {
      setError('Email is required.');
    } else if (password === '') {
      setError('Password is required.');
    } else {
      setError(''); // Clear any previous error
      // Continue with the signup logic, e.g., calling an API to register the user
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('User Type:', userType);
      // Clear the form fields after successful submission.
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  const handleToggle = () => {
    setError(''); // Clear any previous error when toggling
    setIsLogin((prevState) => !prevState); // Toggle between login and signup
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
            <option value="traveler">Traveller</option>
            <option value="tour-operator">Tour Operator</option>
          </select>
          <br />
          {error && <div style={{ color: 'red' }}>{error}</div>}
          <br />
          <input type="submit" value={isLogin ? 'Login' : 'Sign Up'} className="button1" />
        </form>
        <br />
        <p>
          {isLogin ? 'Don\'t have an account? ' : 'Already have an account? '}
          <Link to={isLogin ? '/signup' : '/login'} onClick={handleToggle}>
            {isLogin ? 'Sign Up' : 'Login'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
