import React from 'react';
import Header from '../header/Header';

const Careers = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="careers-container">
      <h2>Careers at TravelTrove</h2>
      <p>
        At TravelTrove, we are on a mission to revolutionize the travel industry by creating a user-friendly and personalized platform that empowers travelers and tour operators alike. If you are passionate about travel and technology, and if you want to be a part of a team that is dedicated to providing seamless travel experiences, then TravelTrove might be the right place for you.
      </p>

      <h3>Why Work with Us:</h3>
      <ul>
        <li>Be a part of a dynamic and innovative team that is shaping the future of travel technology.</li>
        <li>Work in a collaborative and inclusive environment that values creativity and diverse perspectives.</li>
        <li>Join a company that prioritizes user-centric design and is committed to creating the best possible experience for our users.</li>
        <li>Enjoy flexible work hours and opportunities for personal and professional growth.</li>
      </ul>

      <h3>Current Openings:</h3>
      <div className="job-opening">
        <h4>Full-Stack Developer</h4>
        <p>
          <b>Responsibilities:</b>
          <br />
          - Collaborate with the development team to design and implement new features and functionalities for the TravelTrove platform.
          <br />
          - Ensure seamless integration of front-end and back-end components.
          <br />
          - Conduct thorough testing and debugging of applications.
        </p>
        <p>
          <b>Requirements:</b>
          <br />
          - Proficiency in JavaScript, HTML, CSS, and relevant frameworks (e.g., React, Node.js).
          <br />
          - Experience with database management systems (e.g., MongoDB, MySQL).
          <br />
          - Strong problem-solving and analytical skills.
        </p>
      </div>

      <div className="job-opening">
        <h4>UI/UX Designer</h4>
        <p>
          <b>Responsibilities:</b>
          <br />
          - Create intuitive and visually appealing user interfaces for the TravelTrove platform.
          <br />
          - Conduct user research and gather feedback to inform design decisions.
          <br />
          - Collaborate with the development team to implement user interface designs.
        </p>
        <p>
          <b>Requirements:</b>
          <br />
          - Proven experience in UI/UX design, with a strong portfolio showcasing previous work.
          <br />
          - Proficiency in design tools such as Adobe XD, Sketch, or Figma.
          <br />
          - Understanding of user-centered design principles.
        </p>
      </div>

      <div className="job-opening">
        <h4>Marketing Specialist</h4>
        <p>
          <b>Responsibilities:</b>
          <br />
          - Develop and implement marketing strategies to promote TravelTrove and attract users and tour operators.
          <br />
          - Create engaging content for social media, blogs, and other marketing channels.
          <br />
          - Analyze marketing performance metrics and make data-driven decisions.
        </p>
        <p>
          <b>Requirements:</b>
          <br />
          - Previous experience in digital marketing and social media management.
          <br />
          - Strong communication and writing skills.
          <br />
          - Familiarity with marketing analytics tools.
        </p>
      </div>

      <h3>How to Apply:</h3>
      <p>
        To apply for any of the above positions or to express your interest in joining TravelTrove, please send your resume and a cover letter detailing your relevant experience and why you believe you would be a good fit for our team to <a href="mailto:careers@traveltrove.com">careers@traveltrove.com</a>. We look forward to hearing from you!
      </p>

      <p>
        At TravelTrove, we believe in the power of travel to transform lives, and we are committed to building a platform that empowers travelers and enhances their experiences. Join us on this exciting journey and be a part of the future of travel!
      </p>
    </div>
    </div>
  );
};

export default Careers;
