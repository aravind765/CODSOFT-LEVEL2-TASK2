import React from 'react';
import '../css/Tips.css';
import Header from './Header';

const CareerTipsPage = () => {
  return (
    <div className="career-tips-container">
         <Header/>
      <h1>Career Tips</h1>

      <section className="career-tip">
        <h2>Set Clear Goals</h2>
        <p>
          Define your short-term and long-term career goals. Knowing where you want to go will help you make informed decisions along the way.
        </p>
      </section>

      <section className="career-tip">
        <h2>Continuous Learning</h2>
        <p>
          Stay updated with industry trends and invest in your professional development. Attend workshops, take online courses, or pursue advanced degrees if necessary.
        </p>
      </section>

      <section className="career-tip">
        <h2>Effective Communication</h2>
        <p>
          Develop strong communication skills, both verbal and written. Clear communication is essential in any professional setting.
        </p>
      </section>

    </div>
  );
};

export default CareerTipsPage;
