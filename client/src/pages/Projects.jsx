
import React, { useState }  from 'react';
//import "../../assets/css/Projects.css";

function ProjectPost({ title, creator, description, totalTarget, dateStart, dateEnd, image }) {
    const [targetValue, setTargetValue] = useState(totalTarget);
    const progress = (targetValue / totalTarget) * 100;
  
    const handleTargetChange = (event) => {
      setTargetValue(event.target.value);
    };
  
    return (
      <div className="project-post">
        <div className="project-post-image">
          <img src={image} alt={title} />
        </div>
        <div className="project-post-details">
          <h2 className="project-post-title">{title}</h2>
          <p className="project-post-creator">Created by {creator}</p>
          <p className="project-post-description">{description}</p>
          <div className="project-post-value-date">
            <p className="project-post-value">Total Project Value: ${targetValue}</p>
            <div className="project-post-progress-bar-container">
              <div className="project-post-progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
  
            <p className="project-post-date">{dateStart} - {dateEnd}</p>
          </div>
        </div>
      </div>
    );
  }
  
  function Projects() {
    const projectPosts = [
      {
        title: 'Project 1',
        description: 'A project environment is all the internal and external forces that exert on your project management. These are things from inside and outside the project that can impact your schedule, budget, team morale and much more.',
        creator: 'John Doe',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRbeZd3yAX2pW8uGjpZrYJBZE8jTiyQcAi2o8qg4q&s',
        totalTarget: 10000,
        dateStart: '2022-01-01',
        dateEnd: '2022-03-31',
      },
      {
        title: 'Project 2',
        description: 'Short description of project 2',
        creator: 'Jane Smith',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzRbeZd3yAX2pW8uGjpZrYJBZE8jTiyQcAi2o8qg4q&s',
        totalTarget: 20000,
        dateStart: '2022-02-01',
        dateEnd: '2022-04-30',
      },
      // Add more project posts here
    ];
  
    return (
      <div className="projects-page">
        <h1>Welcome to Our Projects</h1>
        <div className="project-post-list">
          {projectPosts.map((post) => (
            <ProjectPost
              key={post.title}
              title={post.title}
              creator={post.creator}
              description={post.description}
              image={post.image}
              totalTarget={post.totalTarget}
              dateStart={post.dateStart}
              dateEnd={post.dateEnd}
            />
          ))}
        </div>
      </div>
    );
  }
export default Projects;