import React, { useState } from 'react';
import axios from 'axios';

const JobApplicationForm = ({ jobId, onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/job-applications', {
        jobId,
        name,
        email,
        resume,
      });

      onSubmit({
        jobId,
        name,
        email,
        resume,
      });

      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting job application:', error);
      alert('Error submitting job application. Please try again.');
    }

    setName('');
    setEmail('');
    setResume('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Resume/CV:
        <textarea value={resume} onChange={(e) => setResume(e.target.value)} />
      </label>
      <br />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default JobApplicationForm;
