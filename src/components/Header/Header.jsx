import React from 'react'
import './Header.scss'
import profile from './profile.jpeg'

const Header = () => {
  return (
    <header className="header">
      <div className="img-container">
        <img src={profile} alt="kabiraj" />
      </div>
    </header>
  )
}

export default Header
