import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/SignUp.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('candidate');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3001/signup', { username, password, role });
      localStorage.setItem('token', response.data.token);

      if (response.data.role === 'employer') {
        navigate.push('/employer-dashboard');
      } else {
        navigate.push('/candidate-dashboard');
      }
    } catch (error) {
      setError('Error signing up');
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-container">
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
      <select className="role-select" onChange={(e) => setRole(e.target.value)}>
        <option value="candidate">Candidate</option>
        <option value="employer">Employer</option>
      </select>
      <button className="signup-button" onClick={handleSignUp}>
        Sign Up
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignUp;
