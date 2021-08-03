import React from 'react'
import WorkCard from '../../WorkCard/WorkCard'
import './Home.scss'
import { workInfo } from './workinfo'

const Home = () => {
  return (
    <div className="section section-home">
      <div className="intro">
        <h1>
          I am a software engineer learning and building web applications using
          React and NodeJS. I also love to play around with new frameworks to
          build scalable and performant web applications. I love to fiddle
          around with algorithms and their use cases.
        </h1>
      </div>

      <div className="work-experience">
        <h2>Work Experience</h2>
        <div className="work-experience-card-container">
          {workInfo.map((workDetails) => (
            <WorkCard key={workDetails.id} workDetails={workDetails} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
