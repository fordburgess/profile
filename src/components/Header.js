import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-left'>
        <h2 style={{marginBottom: '-10px'}}>Ford Burgess</h2>
        <h4>London, UK</h4>
      </div>
      <div className='header-right'>
        <h4>Programming</h4>
        <h4>Sports</h4>
        <h4>Literature</h4>
        <h4>Travel</h4>
      </div>
    </div>
  )
}

export default Header
