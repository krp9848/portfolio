import React from 'react'
import './Sidebar.scss'
const Sidebar = () => {
  const year = new Date().getFullYear()
  return (
    <nav className="sidebar">
      <ul className="nav-list">
        <li className="nav-list-item">Home</li>
        <li className="nav-list-item">Projects</li>
        <li className="nav-list-item">Blogs</li>
        <li className="nav-list-item">Contact</li>
      </ul>
      <p className="copyright-text">
        Designed &#38; built by <br />
        KABI RAJ PANT@{year}
      </p>
    </nav>
  )
}

export default Sidebar
