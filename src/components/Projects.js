import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Project 1',
      description: 'This is a brief description of Project 1.',
      githubLink: 'https://github.com/username/project1'
    },
    {
      title: 'Project 2',
      description: 'This is a brief description of Project 2.',
      githubLink: 'https://github.com/username/project2'
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      {projectList.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      ))}
    </div>
  );
};

export default Projects;