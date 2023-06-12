import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const projectItems = projects.map((project) => {
    return <div  className="project-item">
    <h3>{project.name}</h3>
    <p>{project.about}</p>
    <div className="technologies">
      <ProjectItem key={project.id} technologies={project.technologies}/>
    </div>
  </div>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectItems}</div>
    </div>
  );
}

export default ProjectList;
