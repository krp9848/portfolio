import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.scss'
import { FaHome } from 'react-icons/fa'
import { FaTasks } from 'react-icons/fa'
import { FaAddressBook } from 'react-icons/fa'
import { FaBlog } from 'react-icons/fa'

const Sidebar = () => {
  const year = new Date().getFullYear()
  const baseUrl = '/portfolio'
  const currentRoutePath = useLocation().pathname
  return (
    <nav className="sidebar">
      <ul className="nav-list">
        <li
          className={[
            'nav-list-item',
            currentRoutePath === baseUrl + '/' ? 'nav-list-item-active' : '',
          ].join(' ')}
        >
          <Link to={baseUrl + '/'}>
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li
          className={[
            'nav-list-item',
            currentRoutePath === baseUrl + '/projects'
              ? 'nav-list-item-active'
              : '',
          ].join(' ')}
        >
          <Link to={baseUrl + '/projects'}>
            <FaTasks />
            <span>Projects</span>
          </Link>
        </li>
        <li
          className={[
            'nav-list-item',
            currentRoutePath === baseUrl + '/blogs'
              ? 'nav-list-item-active'
              : '',
          ].join(' ')}
        >
          <Link to={baseUrl + '/blogs'}>
            <FaBlog />
            <span>Blogs</span>
          </Link>
        </li>
        <li
          className={[
            'nav-list-item',
            currentRoutePath === baseUrl + '/contact'
              ? 'nav-list-item-active'
              : '',
          ].join(' ')}
        >
          <Link to={baseUrl + '/contact'}>
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
