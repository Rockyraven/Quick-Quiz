import React from 'react'
import './quizcard.css'
import {category1} from  'assets'

export const QuizCard = ({heading, about, Image}) => {
  return (
    <div className='quiz-card-container'>
        <img src={category1} alt="" />
        <p className='card-heading'>{heading}</p>
        <p className="card-description">{about}</p>
        <a href="#" className='play-button'>Play Now</a>
    </div>
  )
}
