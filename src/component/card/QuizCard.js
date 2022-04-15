import React from 'react'
import './quizcard.css'
import { Link } from 'react-router-dom'

export const QuizCard = ({title, image,_id}) => {
  return (
    <div className='quiz-card-container'>
        <img src={image} alt="quizcard" />
        <p className='card-heading'>{title}</p>
        <Link to={`/guideline/${_id}`} className='play-button'>Play Now</Link>
    </div>
  )
}
