import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from "react";
import "../css/JobListingsPage.css"
import Header from './Header';


const JobListingsPage = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/jobs')
      .then(response => setJobListings(response.data))
      .catch(error => console.error('Error fetching job listings:', error));
  }, []);

  return (
    <div>
       <Header/>
      <h1>Job Listings</h1>

      <section>
        <h2>Filter and Search</h2>
      </section>

      <section>
        <h2>Featured Jobs</h2>
        {jobListings.map(job => (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
            <Link to={`/job/${job.id}`} className="cta-button">
              View Details
            </Link>
          </div>
        ))}
      </section>

      <section>
        <h2>Recent Listings</h2>
        {jobListings.map(job => (
          <div key={job.id}>
            <h3>{job.title}</h3>
            <p>{job.company} - {job.location}</p>
            <Link to={`/job/${job.id}`} className="cta-button">
              View Details
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default JobListingsPage;
