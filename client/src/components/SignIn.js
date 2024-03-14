import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../css/SignIn.css';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      localStorage.setItem('token', response.data.token);

      if (response.data.role === 'employer') {
        history.push('/employer-dashboard');
      } else {
        history.push('/candidate-dashboard');
      }
    } catch (error) {
      setError('Invalid username or password');
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="signin-container">
      <input
        type="text"
        placeholder="Username"
        className="input-field"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="input-field"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="signin-button" onClick={handleSignIn}>
        Sign In
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignIn;
