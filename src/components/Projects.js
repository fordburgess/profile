import React from 'react'
import Project from './Project'
import './Projects.css'
import PROJECTS from './projectData'

const Projects = () => {
  return (
    <div className='project-container'>
      <h1>
        Projects
      </h1>
      <div>
        {PROJECTS.map(p => {
          return (
            <Project title={p.title}
            description={p.description}
            height={p.height}
            width={p.width}
            img={p.img}/>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
