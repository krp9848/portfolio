import React from 'react'
import Card from '../../Card/Card'
import './Projects.scss'
import { projects } from './projectinfo'
const Projects = () => {
  return (
    <section className="section section-projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <Card key={project.id} cardType="project" cardDetails={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
