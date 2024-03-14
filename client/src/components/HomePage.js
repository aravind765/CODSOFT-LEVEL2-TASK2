import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HomePage.css';
import HeaderHome from './HeaderHome';

const HomePage = () => {
  return (
    <div className="homepageContainer">
      <HeaderHome/>
      <section className="welcome-section">
        <h1>Welcome to BubbleWork Job Board</h1>
        <p>Find job opportunities and take the next step in your career.</p>
        <Link to="/job-listings" className="cta-button">
          Explore Jobs
        </Link>
      </section>

      <section className="featured-jobs-section">
        <h2>Featured Jobs</h2>
        <ul>
          <li>Computer Manager</li>
          <li>Paralegal</li>
          <li>Technical Writer</li>
          <li>Web Developer</li>
          <li>Financial Manager</li>
          <li>Medical Assistant</li>
          <li>Software Developer</li>
        </ul>
      </section>

      <section className="user-testimonials-section">
        <h2>What Our Users Say</h2>
        <ul>
          <li>JohnDoe34: "I stumbled upon BubbleWork when I was feeling lost in my job search. The career tips and resources here turned my search around. Within weeks, I landed my dream job! Highly recommend."</li>
          <li>CareerExplorer123: "As a recent graduate, I found BubbleWork to be an invaluable resource. The career tips are practical and easy to implement. Thanks to this platform, I secured my first job within a month of graduation."</li>
          <li>ProfessionalSeeker: "BubbleWork has become my go-to hub for all things career-related. The diverse range of tips and advice caters to professionals at every stage. It's like having a personal career coach right at your fingertips!"</li>
          <li>SuccessStoriesGalore: "The success stories featured on BubbleWork inspired me to take bold steps in my career. The insights shared by others who've overcome challenges motivated me to push my own boundaries. I'm now thriving in a role I once thought was out of reach."</li>
        </ul>
      </section>

      <section className="career-tips-section">
        <h2>Career Tips</h2>
        <p>
          At BubbleWork, we understand the challenges individuals face in today's dynamic job market. We believe in the transformative power of strategic career decisions, and our platform is designed to be your companion in achieving your professional aspirations. Explore our curated content, connect with like-minded professionals, and embark on a journey of continuous improvement. Your next career milestone awaits, and BubbleWork is here to guide you every step of the way. Welcome to a world of possibilities and career success!
        </p>
        <ul>
          <li>Set Clear Goals: Define your short-term and long-term career goals. Knowing where you want to go will help you make informed decisions along the way.</li>
          <li>Continuous Learning: Stay updated with industry trends and invest in your professional development. Attend workshops, take online courses, or pursue advanced degrees if necessary.</li>
          <li>Effective Communication: Develop strong communication skills, both verbal and written. Clear communication is essential in any professional setting.</li>
        </ul>
      </section>

      <section className="join-us-section">
        <h2>Join Us Today!</h2>
        <p>Sign up today and start your job search with BubbleWork Job Board.</p>
        <Link to="/signup" className="cta-button">
          Sign Up
        </Link>
        <Link to="/signin" className="cta-button">
          Sign In
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
