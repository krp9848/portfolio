import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import Blogs from './Blogs/Blogs'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import './Main.scss'

const Main = () => {
  const baseUrl = '/portfolio'
  return (
    <main className="main">
      <Switch>
        <Route path={baseUrl + '/projects'}>
          <Projects />
        </Route>
        <Route path={baseUrl + '/blogs'}>
          <Blogs />
        </Route>
        <Route path={baseUrl + '/contact'}>
          <Contact />
        </Route>
        <Route path={baseUrl + '/'}>
          <Home />
        </Route>
      </Switch>
    </main>
  )
}

export default Main
