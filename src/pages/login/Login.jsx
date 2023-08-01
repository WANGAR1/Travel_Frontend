import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any authentication logic here (e.g., calling an API to validate user credentials)
    // For this example, we will simulate an error for demonstration purposes
    if (email === '') {
      setError('Email is required.');
    } else if (password === '') {
      setError('Password is required.');
    } else {
      setError(''); // Clear any previous error

      // Continue with the authentication logic, e.g., calling an API to validate user credentials
      console.log('Email:', email);
      console.log('Password:', password);

      // Clear the form fields after successful submission.
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <br />
      <br />
      <div id="login_form">
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
