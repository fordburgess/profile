import React from 'react'
import './Project.css'

const Project = ({title, description, height, width, img}) => {
  return (
    <div className='project' style={{height: height, width: width}}>
      <img src={img} />
    </div>
  )
}

export default Project
