import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios'; 
import HomePage from './components/HomePage';
import JobListingsPage from './components/JobListingsPage';
import JobDetailPage from './components/JobDetailPage';
import EmployerDashboard from './components/EmployerDashboard';
import CandidateDashboard from './components/CandidateDashboard';
import SignUp from './components/SingUp';
import SignIn from './components/SingUp';
import CandidateProfileForm from './components/CandidateProfileForm';
import Tips from './components/Tips';

const apiUrl = 'http://localhost:3001';


const App = () => {
  useEffect(() => {
    axios.get(`${apiUrl}/jobs`)
      .then(response => console.log(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job-listings" element={<JobListingsPage />} />
        <Route path="/job/:id" element={<JobDetailPage />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/candidate-profile-form" element={<CandidateProfileForm/>} />
        <Route path="/tips" element={<Tips/>} />
      </Routes>
    </Router>
  );
};

export default App;
