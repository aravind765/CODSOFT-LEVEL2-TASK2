import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate.push('/signin');
  };

  return (
    <div className="header-container">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/job-listings" className="nav-link">Job Listings</Link>
          </li>
          <li className="nav-item">
          <Link to="/tips" className="nav-link">Career Tips</Link>
          </li>
          <li className="nav-item">
            <button className="nav-button" onClick={() => navigate.goBack()}>Back</button>
          </li>
          <li className="nav-item">
            <button className="nav-button" onClick={handleSignOut}>Sign Out</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
