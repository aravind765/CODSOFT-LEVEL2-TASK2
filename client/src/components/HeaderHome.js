import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/HeaderHome.css';

const HeaderHome = () => {
  const navigate = useNavigate();

  return (
    <div className="header-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/job-listings" className="nav-link">Job Listings</Link>
          </li>
          <li className="nav-item">
            <Link to="/tips" className="nav-link">Career Tips</Link>
          </li>
          <li className="nav-item">
            <button className="nav-button" onClick={() => navigate('/signin')}>Sign In</button>
          </li>
          <li className="nav-item">
            <button className="nav-button" onClick={() => navigate('/signup')}>Sign Up</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HeaderHome;
