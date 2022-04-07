import React from 'react'
import Project from './Project'
import './Projects.css'
import PROJECTS from './projectData'

const Projects = () => {
  return (
    <div className='c4'>
      <div className='project-header'>
        <h2>
          Projects
        </h2>
      </div>
      <div className='projects'>
        <div className='sub-container' id='left'>
          {PROJECTS.map((p) => {
            if (p.id === 1)
              return (
                <Project title={p.title}
                description={p.description}
                height={p.height}
                width={p.width}
                img={p.img}/>
              )
          })}
        </div>
        <div className='sub-container' id='right'>
          {PROJECTS.map((p) => {
            if (p.id == 0)
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
    </div>
  )
}

export default Projects
