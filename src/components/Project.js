import React from 'react'
import './Project.scss'


const Project = ({title, description, width, height, img}) => {
  return (
    <div className='this' style={{width: width, height: height}}>
      <img src={img} alt='img' className='project-img'/>
      <div className="info">
        {description}
      </div>
    </div>
  )
}

export default Project
