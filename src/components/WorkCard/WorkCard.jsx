import React from 'react'
import './WorkCard.scss'
const WorkCard = ({
  workDetails: { title, company, duration, achievements },
}) => {
  return (
    <div className="work-card">
      <h3 className="title">{title}</h3>
      <h4 className="company">{company}</h4>
      <p className="duration">{duration}</p>
      <ul>
        <h5>Achievements</h5>
        {achievements.map((achievement) => (
          <li key={achievement.id}>{achievement.info}</li>
        ))}
      </ul>
    </div>
  )
}

export default WorkCard
