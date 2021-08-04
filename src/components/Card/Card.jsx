import React from 'react'
import './Card.scss'
const Card = ({
  cardType,
  cardDetails: { title, description, link, demo },
}) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      {cardType === 'project' ? (
        <a href={link} target="_blank" rel="noreferrer" className="card-link">
          View Source Code
        </a>
      ) : (
        ''
      )}

      {cardType === 'project' ? (
        <a href={demo} target="_blank" rel="noreferrer" className="card-link">
          View Demo
        </a>
      ) : (
        <a href={link} target="_blank" rel="noreferrer" className="card-link">
          Read Blog
        </a>
      )}
    </div>
  )
}

export default Card
