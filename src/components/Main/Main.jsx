import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import Blogs from './Blogs/Blogs'
import Contact from './Contact/Contact'
import Projects from './Projects/Projects'
import './Main.scss'

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  )
}

export default Main
