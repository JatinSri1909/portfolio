import React from 'react';
import './Skills.css';

// Import your skill images
import htmlLogo from '../assets/images/html.svg';
import cssLogo from '../assets/images/css.svg';
import jsLogo from '../assets/images/js.svg';
import mongoLogo from '../assets/images/mongo.svg';
import expressLogo from '../assets/images/express.svg';
import reactLogo from '../assets/images/react.svg';
import nodeLogo from '../assets/images/node.svg';
import gitLogo from '../assets/images/git.svg';
import githubLogo from '../assets/images/github.svg';
import cLogo from '../assets/images/c.svg';
import cppLogo from '../assets/images/cpp.svg';
import javaLogo from '../assets/images/java.svg';
import rustLogo from '../assets/images/rust.svg';
import dbmsLogo from '../assets/images/dbms.svg';
import dockerLogo from '../assets/images/docker.svg';
import pythonLogo from '../assets/images/python.svg';
import pandasLogo from '../assets/images/pandas.svg';
import mysqlLogo from '../assets/images/mysql.svg';
import linuxLogo from '../assets/images/linux.svg'; // Import the Linux logo

const Skills = () => {
  const skillsList = [
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'MongoDB', logo: mongoLogo },
    { name: 'Express', logo: expressLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Node', logo: nodeLogo },
    { name: 'Git', logo: gitLogo },
    { name: 'GitHub', logo: githubLogo },
    { name: 'C', logo: cLogo },
    { name: 'C++', logo: cppLogo },
    { name: 'Java', logo: javaLogo },
    { name: 'Rust', logo: rustLogo },
    { name: 'DBMS', logo: dbmsLogo },
    { name: 'Docker', logo: dockerLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'Pandas', logo: pandasLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'Linux', logo: linuxLogo }, // Add Linux to your skills
    // Add more skills as needed
  ];

  return (
    <div className="skills-container">
      {skillsList.map((skill, index) => (
        <div key={index} className="skill-card">
          <img src={skill.logo} alt={skill.name} className="skill-logo" />
          <h2>{skill.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Skills;