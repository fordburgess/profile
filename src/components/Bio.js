import React from 'react'
import './Bio.css'
import ford1 from '../images/ford1.jpeg'


const Bio = () => {
  return (
    <div className='bio-container'>
      <div className='under-container'>
        <div className='container-left'>
          <div className='temp'>
            <h1>Bio</h1>
            <p className='bio-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. </p>
          </div>
          <div className='contacts'>
            <a>fordburgess1@gmail.com</a>
            <a href='https://www.instagram.com/ford_burgess/'>@ford_burgess</a>
            <a href='https://www.linkedin.com/in/ford-burgess/'>linkedin.com/in/ford-burgess</a>
          </div>
        </div>
        <div className='container-right'>
          <img src={ford1} alt='me!'className='ford1'/>
        </div>
      </div>
    </div>
  )
}

export default Bio
