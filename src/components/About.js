import React from 'react';
import './About.css';
import profilePicture from '../assets/images/profile_picture.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="profile-header">
        <img src={profilePicture} alt="Jatin Srivastava" className="profile-picture"/>
        <h1>Jatin Srivastava</h1>
        <p>Web Developer | MERN Stack</p>
      </div>
      <div className="profile-bio">
        <p>I am passionate about building things from scratch and solving problems with code.</p>
      </div>
    </div>
  );
};

export default About;