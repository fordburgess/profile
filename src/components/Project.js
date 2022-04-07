import React from 'react'
import './Project.css'


const Project = ({title, description, width, height, img}) => {
  return (
    <div className='this' style={{width: width, height: height}}>
      <img src={img} alt='img' className='project-img'/>
    </div>
  )
}

export default Project
