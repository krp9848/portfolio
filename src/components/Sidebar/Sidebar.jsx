import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.scss'
import { FaHome } from 'react-icons/fa'
import { FaTasks } from 'react-icons/fa'
import { FaAddressBook } from 'react-icons/fa'
import { FaBlog } from 'react-icons/fa'

const Sidebar = () => {
  const year = new Date().getFullYear()
  const currentRoutePath = useLocation().pathname
  return (
    <nav className="sidebar">
      <ul className="nav-list">
        <li
          className={[
            'nav-list-item',
            currentRoutePath === '/' ? 'nav-list-item-active' : '',
          ].join(' ')}
        >
          <Link to="/">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li
          className={[
            'nav-list-item',
            currentRoutePath === '/projects' ? 'nav-list-item-active' : '',
          ].join(' ')}
        >
          <Link to="/projects">
            <FaTasks />
            <span>Projects</span>
          </Link>
        </li>
        <li
          className={[
            'nav-list-item',
            currentRoutePath === '/blogs' ? 'nav-list-item-active' : '',
          ].join(' ')}
        >
          <Link to="/blogs">
            <FaBlog />
            <span>Blogs</span>
          </Link>
        </li>
        <li
          className={[
            'nav-list-item',
            currentRoutePath === '/contact' ? 'nav-list-item-active' : '',
          ].join(' ')}
        >
          <Link to="/contact">
            <FaAddressBook />
            <span>Contact</span>
          </Link>
        </li>
      </ul>
      <p className="copyright-text">
        Designed &#38; built by <br />
        KABI RAJ PANT&#64;{year}
      </p>
    </nav>
  )
}

export default Sidebar
